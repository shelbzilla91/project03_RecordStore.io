const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const User = new Schema({
    name: String,
    username: String,
    email:String,
    password:String,
    img:String,
    records: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Record'
        }
    ]
})

module.exports = mongoose.model('User', User)