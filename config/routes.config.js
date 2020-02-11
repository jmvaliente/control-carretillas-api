const express = require('express')
const router = express.Router()
const machineController = require('../controllers/machine.controller')
const mantController = require ('../controllers/mant.controller')
const operController = require ('../controllers/oper.controller')

//Routes Machine
router.get('/', machineController.init)
router.post('/create',machineController.create)
router.delete('/delete/:id',machineController.delete)
router.put('/update/:id',machineController.update)

//Routes Mantenimiento Users

router.get('/mant',mantController.init)
router.post('/mant/create',mantController.create)
router.delete('/mant/delete/:id',mantController.delete)
router.put('/mant/update/:id',mantController.update)

//Routes Oper User

router.get('/oper',operController.init)
router.post('/oper/create',operController.create)
router.delete('/oper/delete/:id',operController.delete)
router.put('/oper/update/:id',operController.update)

module.exports = router