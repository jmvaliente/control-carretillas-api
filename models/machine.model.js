const mongoose = require ('mongoose')

const machineSchema = new mongoose.Schema(
    {
        number: { type: String, required: true, trim:true, unique: true },
        nfc: { type:String, trim:true },
        nfcActive: {type:Boolean, default: false},
        provider:{ type: String, required: true, trim: true },
        comments: [{type: mongoose.Schema.Types.ObjectId, ref: 'Comment'}],
        image: { type: Array },
        dateActive: {type: Date},
        completeCharge: {type: Boolean, default:false}
    },
    {
        timestamps:true
    }
)

const Machine = new mongoose.model('Machine',machineSchema)

module.exports = Machine