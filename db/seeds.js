
require('dotenv').config()
const mongoose = require('mongoose')
mongoose.connect(process.env.MONGODB_URI)
const User = require('../models/User')
const Record = require('../models/Record')

const Queen = new Record ({
    title:"News of the World",
    release: 10/28/77,
    band:"Queen",
    genre:"Classic Rock",
    username: 'shelbzilla91',
    img: 'https://upload.wikimedia.org/wikipedia/en/thumb/e/ea/Queen_News_Of_The_World.png/220px-Queen_News_Of_The_World.png' })
const Shelby = new User({
    username: 'shelbzilla91',
    name: 'Shelby',
    password: 'jk1010',
    email: 'shelbgatozillatron@gmail.com',
    img: 'https://www.udiscovermusic.com/wp-content/uploads/2017/07/FM014.jpg',
    records: [Queen]
})



User.remove({})
    .then(() => Record.remove({}))
    .then(() => Record.insertMany(Queen))
    .then(() => Shelby.save())
    .then(() => console.log('Successful Save'))
    .then(() => mongoose.connection.close())
