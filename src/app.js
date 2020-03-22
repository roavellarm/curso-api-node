const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const app = express()

// Conecta ao banco
mongoose.connect(
  'mongodb+srv://Rodrigo:Rodrigo2012@cluster0-jcvca.azure.mongodb.net/test?retryWrites=true&w=majority'
)

// Carrega as Rotas
const indexRoute = require('./routes/index-route')
const productRoute = require('./routes/product-route')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use('/', indexRoute)
app.use('/products', productRoute)

module.exports = app
