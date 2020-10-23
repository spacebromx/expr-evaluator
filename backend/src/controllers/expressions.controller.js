const {BaseExpressions} = require('../models/Expressions')
const {body, validationResult} = require('express-validator')

let expressionsController = {
  getValues: (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({errors: errors.array()})
    }

    const c = new BaseExpressions(req.body)
    res.json(c.values)
  },
}

module.exports = expressionsController
