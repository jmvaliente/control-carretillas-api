const Machine = require('../models/machine.model')
const { validationResult } = require('express-validator') // result validation with express-validator

module.exports.init = (req, res, next) => {

    Machine.find()
        .then((machine)=>{
            res.json(machine)
        })
        .catch((error) => {console.log(error)})

    
}

module.exports.initUse = (req, res, next) => {

    Machine.find({"nfcActive":false})
        .then((machine)=>{
            res.json(machine)
        })
        .catch((error) => {console.log(error)})

    
}

module.exports.initCharge = (req, res, next) => {

    Machine.find({"nfcActive":true})
        .then((machine)=>{
            res.json(machine)
        })
        .catch((error) => {console.log(error)})

    
}

module.exports.create = (req, res, next) => {

    //validation result

    const error = validationResult(req)

    if(!error.isEmpty()){
        return res.status(400).json(error)
    }


    
    const machine = new Machine (req.body)
    machine.save()
        .then((machine) => {
            res.status(202).json(machine)
        })
        .catch((error) => { console.log(error) })

}

module.exports.delete = (req, res, next) => {

    Machine.findByIdAndDelete(req.params.id)
        .then( (machine) => {
            if (!machine){
                throw createError(404,"Machine no exist")
            } else {
                res.status(204).json()
            }
        })
        .catch((error) => {console.log(error)})

}

module.exports.update = (req, res, next) => {
    
    Machine.findByIdAndUpdate(req.params.id, req.body, { new:true })
        .then((machine) => {
            if(!machine){
                throw createError(404,"Machine not Exist")
            }else{
                res.status(204).json(machine)
            }
        })
        .catch((error) => {console.log(error)})

}