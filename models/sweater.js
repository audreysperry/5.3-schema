const mongoose = require('mongoose');

const sweaterSchema = new mongoose.Schema({

  name: {type: String, required: true},
  pockets: Number,
  materials: {
    primary: {type: String},
    secondary: {type: String,}
  },
  colors: [String]
})

const Sweater = mongoose.model('Sweater', sweaterSchema);

module.exports = Sweater;
