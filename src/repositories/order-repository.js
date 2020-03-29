'use strict'

const mongoose = require('mongoose')
const Order = mongoose.model('Order')

exports.get = async () => {
  return await Order.find({}, 'number status')
    .populate('customer', 'name')
    .populate('items.product', 'title')
}

exports.create = async data => {
  let order = new Order(data)
  await order.save()
}
