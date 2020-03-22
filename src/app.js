const express = require('express')
const app = express()

const router = express.Router()

const route = router.get('/', (request, response, next) => {
  response.status(200).send({
    title: 'Node Store API',
    version: '0.0.1'
  })
})

app.use('/', route)

module.exports = app
