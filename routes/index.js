const express = require('express')
const router = express.Router()
const userController = require('../controllers/userController')
const recordController = require('../controllers/recordController')

router.get('/api/users', userController.index)
router.post('/api/users/', userController.create)
router.patch('/api/users/:userId', userController.update)
router.get('/api/users/:userId', userController.show)
router.delete('/api/users/:userId', userController.delete)


router.get('/api/users/:userId/records', recordController.index)
router.get('/api/records/:ideaId', recordController.show)
router.delete('/api/records/:ideaId', recordController.delete)
router.patch('/api/records/:ideaId', recordController.update)
router.post('/api/users/:userId/records', recordController.create)


module.exports = router