const express = require('express')
const router = express.Router()
const attendanceController = require('./controllers/attendanceController')

router.get('/', attendanceController.index)
// router.get('/a/:id', attendanceController.show)
router.post('/', attendanceController.create)
// router.put('/user/:id', attendanceController.update)
// router.delete('/user/:id', attendanceController.destroy)

module.exports = router
