const {BaseExpressions} = require('../models/Expressions')

let expressionsController = {
  getValues: (req, res) => {
    const input = {
      A: true,
      B: true,
      C: false,
      D: 3.3,
      E: 10,
      F: 10,
    }
    const c = new BaseExpressions(input)
    res.json(c.values)
  },
}

module.exports = expressionsController
