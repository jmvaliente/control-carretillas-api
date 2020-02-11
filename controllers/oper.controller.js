const Oper = require('../models/oper.moder')

module.exports.init = (req, res, next) => {

    Oper.find()
    .then((oper)=>{
        res.json(oper)
    })
    .catch((error) => {console.log(error)})

}


module.exports.create = (req, res, next) => {
    
    const oper = new Oper (req.body)
    oper.save()
        .then((oper) => {
            res.status(202).json(oper)
        })
        .catch((error) => { console.log(error) })

}

module.exports.delete = (req, res, next) => {

    Oper.findByIdAndDelete(req.params.id)
        .then( (oper) => {
            if (!oper){
                throw createError(404,"oper no exist")
            } else {
                res.status(204).json()
            }
        })
        .catch((error) => {console.log(error)})

}

module.exports.update = (req, res, next) => {
    
    Oper.findByIdAndUpdate(req.params.id, req.body, { new:true })
        .then((oper) => {
            if(!oper){
                throw createError(404,"oper not Exist")
            }else{
                res.status(204).json(oper)
            }
        })
        .catch((error) => {console.log(error)})

}