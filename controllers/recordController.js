const User = require('../models/User')
const Record = require('../models/Record')

const recordController = {
    index: (req, res) => {
        var userId = req.params.userId
        User.findById(userId).populate('records')
            .then((user) => {
                res.send(user.records)
            })
    },
    show: (req, res) => {
        var userId = req.params.recordId
        Record.findById(userId)
            .then((record) => {
                res.send(record)
            })
    },
    delete: (req, res) => {
        var userId = req.params.userId
        User.findByIdAndDelete(userId)
            .then(() => {
                res.send(200)
            })
    },
    update: (req, res) => {
        var ideaId = req.params.ideaId
        Idea.findByIdAndUpdate(ideaId, req.body, { new: true })
            .then((updatedIdea) => {
                updatedIdea.save()
                res.send(updatedIdea)
            })
    },
    create: (req, res) => {
        var userId = req.params.userId
        User.findById(userId)
            .then((user) => {
                console.log(Record)
                Record.create(req.body)
                    .then((newRecord) => {
                        console.log(newRecord)
                        user.records.push(newRecord)
                        user.save()
                        res.send(newRecord)
                    })
            })
    }

}

module.exports = recordController