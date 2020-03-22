'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

// A configuração do schema é feita através de um JSON
const schema = new Schema({
  // _id (mongoose cria automaticamente o id)
  title: {
    type: String, // do tipo string
    required: true, // requerido
    trim: true // remove os espaços antes e depois da string
  },
  slug: {
    type: String,
    required: true,
    trim: true,
    index: true, //
    unique: true
  },
  description: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  active: {
    type: Boolean,
    required: true,
    default: true
  },
  tags: [
    {
      type: String,
      required: true
    }
  ]
})

module.exports = mongoose.model('Product', schema)
