const {Router} = require('express')
const router = Router()
const {getValuesByType} = require('../controllers/expressions.controller')
const {validationResult} = require('express-validator')
const {PAYLOAD_VALIDATION_RULES} = require('../constants')
const {EXPRESSION_TYPES} = require('../constants')

router
  .route('/base')
  .post(PAYLOAD_VALIDATION_RULES, getValuesByType(EXPRESSION_TYPES.BASE))
router
  .route('/custom1')
  .post(PAYLOAD_VALIDATION_RULES, getValuesByType(EXPRESSION_TYPES.CUSTOM1))
router
  .route('/custom2')
  .post(PAYLOAD_VALIDATION_RULES, getValuesByType(EXPRESSION_TYPES.CUSTOM2))

module.exports = router
