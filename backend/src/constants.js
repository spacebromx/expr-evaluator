const {body} = require('express-validator')

const PAYLOAD_VALIDATION_RULES = [
  body('A').isBoolean(),
  body('B').isBoolean(),
  body('C').isBoolean(),
  body('D').isFloat(),
  body('E').isInt(),
  body('F').isInt(),
]

const EXPRESSION_TYPES = {
  BASE: 'BASE',
  CUSTOM1: 'CUSTOM1',
  CUSTOM2: 'CUSTOM2',
}

module.exports = {
  PAYLOAD_VALIDATION_RULES,
  EXPRESSION_TYPES,
}
