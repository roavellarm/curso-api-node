'use strict'

const express = require('express')
const router = express.Router()

// Rotas
router.post('/', (request, response, next) => {
  response.status(201).send(request.body)
})

router.put('/:id', (request, response, next) => {
  const id = request.param.id
  response.status(200).send({
    id: id,
    item: request.body
  })
})

router.delete('/', (request, response, next) => {
  response.status(200).send(request.body)
})

module.exports = router
