const Machine = require('../models/machine.model')

module.exports.init = (req, res, next) => {

    Machine.find()
        .then((machine)=>{
            res.json(machine)
        })
        .catch((error) => {console.log(error)})

    
}

module.exports.create = (req, res, next) => {
    
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