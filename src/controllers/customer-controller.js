'use strict'

const ValidationContract = require('../validators/fluent-validator')
const repository = require('../repositories/customer-repository')
const md5 = require('md5') // npm install md5 --save
const emailService = require('../services/email-service')

exports.post = async (req, res, next) => {
  let contract = new ValidationContract()
  contract.hasMinLen(
    req.body.name,
    3,
    'O nome deve conter pelo menos 3 caracteres'
  )

  contract.isEmail(req.body.email, 'Email inválido')

  contract.hasMinLen(
    req.body.password,
    3,
    'A senha deve conter pelo menos 3 caracteres'
  )

  if (!contract.isValid()) {
    res
      .status(400)
      .send(contract.errors())
      .end()
    return
  }

  try {
    await repository.create({
      name: req.body.name,
      email: req.body.email,
      password: md5(req.body.password + global.SALT_KEY)
    })

    emailService.send(
      req.body.email,
      'Bem vindo a meu app de teste!',
      global.EMAIL_TMPL.replace('{0}', req.body.name)
    )

    res.status(201).send({ message: 'Cliente cadastrado com sucesso!' })
  } catch (e) {
    error(res, e)
  }
}

function error(response, error) {
  response
    .status(500)
    .send({ message: 'Falha ao processar sua requisicao', error: error })
}
