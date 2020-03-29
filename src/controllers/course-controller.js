'use strict'

const respository = require('../repositories/course-repository')

exports.get = async (req, res, next) => {
  try {
    let data = await respository.getAll()
    res.status(200).send(data)
  } catch (error) {
    console.log('Falha na requisição!!!!', error)
    res.status(500).send({ message: 'Falha na requisição!' })
  }
}

exports.post = async (req, res, next) => {
  try {
    await respository.create(req.body)
    res.status(200).send({ message: 'Curso cadastrado com sucesso' })
  } catch (error) {
    console.log('Falha na requisição!!!!', error)
    res.status(500).send({ message: 'Falha na requisição!' })
  }
}
