const mongoose = require('mongoose')
const schema = mongoose.Schema
const aschema = new schema(
  {
    section: {
      type: String,
      required: true,
    },
    user_name: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    state: {
      type: String,
      required: true,
    },
    move_date: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Welcome = mongoose.model('Welcome',aschema)
module.exports = Welcome