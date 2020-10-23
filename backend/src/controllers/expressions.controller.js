const {
  BaseExpressions,
  BaseExpressionsCustom1,
  BaseExpressionsCustom2,
} = require('../models/Expressions')
const {EXPRESSION_TYPES} = require('../constants')
const {body, validationResult} = require('express-validator')

const classesMapping = {
  [EXPRESSION_TYPES.BASE]: BaseExpressions,
  [EXPRESSION_TYPES.CUSTOM1]: BaseExpressionsCustom1,
  [EXPRESSION_TYPES.CUSTOM2]: BaseExpressionsCustom2,
}

let expressionsController = {
  getValuesByType(type) {
    return (req, res) => {
      const errors = validationResult(req)
      if (!errors.isEmpty()) {
        return res.status(400).json({errors: errors.array()})
      }
      const c = new classesMapping[type](req.body)
      console.log(c.values)
      res.json(c.values)
    }
  },
}

module.exports = expressionsController
