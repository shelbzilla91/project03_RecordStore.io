const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const Record = new Schema({
    title: String,
    band: String,
    genre:String,
    release:Number,
    img:String,
    price: Number
})

module.exports = mongoose.model('Record', Record)