require('dotenv').config()
import express from 'express'
const app = express()

const port = process.env.PORT || 3333

app.get('/', (request, response) => {
  response.json({ message: 'Hello World' })
})

app.listen(port, () => {
  console.log(`Server started on: http://localhost:${port}`)
})
