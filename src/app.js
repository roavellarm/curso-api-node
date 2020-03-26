const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const app = express()

// Conecta ao banco
mongoose.connect(
  'mongodb://rodrigo:rodrigo123@ds229918.mlab.com:29918/generics'
)

// Carrega os Models
const Product = require('./models/product')
const Customer = require('./models/customer')

// Carrega as Rotas
const indexRoute = require('./routes/index-route')
const productRoute = require('./routes/product-route')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use('/', indexRoute)
app.use('/products', productRoute)

module.exports = app
