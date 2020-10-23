const {body} = require('express-validator')

const PAYLOAD_VALIDATION_RULES = [
  body('A').isBoolean(),
  body('B').isBoolean(),
  body('C').isBoolean(),
  body('D').isFloat(),
  body('E').isInt(),
  body('F').isInt(),
]

module.exports = {
  PAYLOAD_VALIDATION_RULES,
}
