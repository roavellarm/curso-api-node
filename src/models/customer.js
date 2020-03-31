'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const schema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  roles: [
    // array de strings onde os valores permitidos são user e admin
    {
      type: String,
      required: true,
      enum: ['user', 'admin'],
      default: 'user' // por padrão é o user que será criado
    }
  ]
})

module.exports = mongoose.model('Customer', schema)
