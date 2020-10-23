const {Router} = require('express')
const router = Router()
const {getValues} = require('../controllers/expressions.controller')
const {validationResult} = require('express-validator')
const {PAYLOAD_VALIDATION_RULES} = require('../constants')

router.route('/').post(PAYLOAD_VALIDATION_RULES, getValues)

module.exports = router
