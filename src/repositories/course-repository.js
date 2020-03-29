'use strict'

const mongoose = require('mongoose')
const Course = mongoose.model('Course')

exports.getAll = async () => {
  let courses = await Course.find({}, 'title description price')
  return courses
}

exports.create = async data => {
  let course = new Course(data)
  await course.save()
}
