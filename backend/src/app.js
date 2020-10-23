const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const app = express()

app.use(morgan('dev'))
app.use(cors())
app.use(express.json())

app.use('/api/v1/expressions', require('./routes/expressions'))

module.exports = app
