const mongoose = require('mongoose')
const schema = mongoose.Schema
const aschema = new schema({
    group: {
        type: Number,
        required: true
    },
    quote:{
        type: String,
        required:true
    }
},{timestamps:true})

const data = mongoose.model('data',aschema)
module.exports = data