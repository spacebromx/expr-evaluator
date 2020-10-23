const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const app = express()
const PORT = process.env.PORT || 5000

app.use(morgan('dev'))
app.use(cors())
app.use(express.json())

app.listen(PORT, () => {
  console.log(`[Backend server] Running on http://localhost:${PORT}/`)
})
