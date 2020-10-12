const express = require('express')
const router = express.Router()
const atendimentoController = require('./controllers/atendimentoController')

router.get('/', atendimentoController.index)
// router.get('/a/:id', atendimentoController.show)
router.post('/', atendimentoController.create)
// router.put('/user/:id', atendimentoController.update)
// router.delete('/user/:id', atendimentoController.destroy)

module.exports = router
