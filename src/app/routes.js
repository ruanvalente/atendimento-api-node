const express = require('express')
const router = express.Router()
const attendanceController = require('./controllers/attendanceController')

router.get('/', attendanceController.index)
router.get('/:id', attendanceController.show)
router.post('/', attendanceController.store)
router.put('/:id', attendanceController.update)
router.delete('/:id', attendanceController.destroy)

module.exports = router
