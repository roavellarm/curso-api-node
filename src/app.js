const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const config = require('./config')

const app = express()

// Conecta ao banco
mongoose.connect(config.connectionString)

// Carrega os Models
const Product = require('./models/product')
const Customer = require('./models/customer')
const Order = require('./models/order')
const Course = require('./models/course')

// Carrega as Rotas
const indexRoute = require('./routes/index-route')
const productRoute = require('./routes/product-route')
const customerRoute = require('./routes/customer-route')
const orderRoute = require('./routes/order-route')
const courseRoute = require('./routes/course-route')

// SCRIPTS
app.use(
  bodyParser.json({
    limit: '5mb'
  })
) // O limimte de até 5 megas pra envio de requests
app.use(bodyParser.urlencoded({ extended: false }))

// Habilita o CORS
app.use(function(req, res, next) {
  res.header('Access-Controll-Allow-Origin', '*')
  res.header(
    'Access-Controll-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, x-access-token'
  )
  res.header('Access-Controll-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')
  next()
})

app.use('/', indexRoute)
app.use('/products', productRoute)
app.use('/customers', customerRoute)
app.use('/orders', orderRoute)
app.use('/courses', courseRoute)

module.exports = app
