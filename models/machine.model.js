const mongoose = require ('mongoose')

const machineSchema = new mongoose.Schema(
    {
        number: { type: String, required: true, trim:true, unique: true },
        nfc: { type:String, trim:true },
        provider:{ type: String, required: true, trim: true },
        image: { type: String }
    },
        {
            timestamps:true
        }


    
)

const Machine = new mongoose.model('Machine',machineSchema)

module.exports = Machine