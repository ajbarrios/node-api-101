const mongoose = require('mongoose')

const Character = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  house: {
    type: String,
    required: true,
    default: 'Stark'
  }
})

module.exports = mongoose.model('Character', Character)
