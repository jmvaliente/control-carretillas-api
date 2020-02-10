const mongoose = require('mongoose');

const operSchema = new mongoose.Schema(
    {
        name: { type: String, required: true},
        seccion: { type: String, required:true}
    },
    {
        timestamps: true
    }

)

const Oper = new mongoose.model('Oper',operSchema)

module.exports = Oper