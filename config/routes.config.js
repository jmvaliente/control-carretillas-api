const express = require('express')
const router = express.Router()
const machineController = require('../controllers/machine.controller')
const mantController = require ('../controllers/mant.controller')
const operController = require ('../controllers/oper.controller')
const { check } = require ('express-validator') // Validator Check

//Routes Machine
router.get('/', machineController.init)
router.get('/machine_use', machineController.initUse)
router.get('/machine_charge', machineController.initCharge)
router.post('/create',
    [
        check('number','El Numero es obligatorio').not().isString(), //express-validator
        check('provider','El Proveedor es obligatorio').not().isEmpty()
    ]
    ,machineController.create)
router.delete('/delete/:id',machineController.delete)
router.put('/update/:id',machineController.update)

//Routes Mantenimiento Users

router.get('/mant',mantController.init)
router.post('/mant/create',
    [
        check('password','La contraseña tiene que tener mas de 4 caracteres').isLength({min:5})
    ]
    ,mantController.create)
router.delete('/mant/delete/:id',mantController.delete)
router.put('/mant/update/:id',mantController.update)
router.post('/mant/login',mantController.login)
router.post('/mant/logout',mantController.logout)

//Routes Oper User

router.get('/oper',operController.init)
router.post('/oper/create',operController.create)
router.delete('/oper/delete/:id',operController.delete)
router.put('/oper/update/:id',operController.update)

module.exports = router