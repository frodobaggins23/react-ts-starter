require('dotenv').config()
const path = require('path')
const express = require('express')

const port = process.env.PORT || 4500 // heroku sets port dynamically, do not set it in your variables
const app = express()

app.use(express.static(path.join(__dirname, '../public/')))

app.get('/api/get-data', (req, res) => {
  return res.send({ data: 'API works!' })
})

app.listen(port, () => {
  console.info(`Express listening at http://localhost:${port}`)
  console.info(`serving bundled content from ${path.join(__dirname, '../public')}`)
})
