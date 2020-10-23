const app = require('./app')
const PORT = process.env.PORT || 5000

function main() {
  app.listen(PORT, () => {
    console.log(`[Backend server] Running on http://localhost:${PORT}/`)
  })
}

main()
