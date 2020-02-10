const mongoose = require ('mongoose')

const machineSchema = new mongoose.Schema(
    {
        number: { type: Number, required:true },
        nfc: { type:String },
        provider:{ type: String, required: true },
        image: { type: String }
    },
        {
            timestamps:true
        }


    
)

const Machine = new mongoose.model('Machine',machineSchema)

module.exports = Machine