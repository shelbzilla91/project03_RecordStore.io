const User = require('../models/User')
const Record = require('../models/Record')

const recordController = {
    index: (req, res) => {
        var recordId = req.params.recordId
        User.findById(userId).populate('records')
            .then((user) => {
                res.send(user.records)
            })
    },
    show: (req, res) => {
        var recordId = req.params.recordId
        Record.findById(recordId)
            .then((record) => {
                res.send(record)
            })
    },
    delete: (req, res) => {
        var ideaId = req.params.recordId
        Idea.findByIdAndDelete(recordId)
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
        var recordId = req.params.recordId
        Record.findById(recordId)
            .then((record) => {
                console.log(record)
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