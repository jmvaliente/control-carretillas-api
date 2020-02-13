const Mant = require('../models/mant.model')
const { validationResult } = require('express-validator')

module.exports.init = (req, res, next) => {

    Mant.find()
        .then((mant)=>{
            res.json(mant)
        })
        .catch((error) => {console.log(error)})

    
}

module.exports.create = (req, res, next) => {

    const error = validationResult(req)
    if(!error.isEmpty){
        return res.status(400).json(error)
    }
    
    const mant = new Mant (req.body)
    
    mant.save()
        .then((mant) => {
            res.status(202).json(mant)
        })
        .catch((error) => { console.log(error) })

}

module.exports.delete = (req, res, next) => {

    Mant.findByIdAndDelete(req.params.id)
        .then( (mant) => {
            if (!mant){
                throw createError(404,"Mant no exist")
            } else {
                res.status(204).json()
            }
        })
        .catch((error) => {console.log(error)})

}

module.exports.update = (req, res, next) => {
    
    Mant.findByIdAndUpdate(req.params.id, req.body, { new:true })
        .then((mant) => {
            if(!mant){
                throw createError(404,"Mant not Exist")
            }else{
                res.status(204).json(mant)
            }
        })
        .catch((error) => {console.log(error)})

}