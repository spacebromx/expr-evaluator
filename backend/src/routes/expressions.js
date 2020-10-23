const {Router} = require('express')
const router = Router()
const {getValues} = require('../controllers/expressions.controller')

router.route('/').get(getValues)

module.exports = router
