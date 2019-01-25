const mongoose = require('../db/connections')
const Schema = mongoose.Schema

const User = new Schema({
    firstname: String,
    lastname: String,
    genre:String,
    records: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Idea'
        }
    ]
})

module.exports = mongoose.model('User', User)