const mongoose = require('mongoose');

const mantSchema = new mongoose.Schema(
    {
        name: { type:String, required: true, trim:true },
        surname: {type:String, required: true, trim:true},
        password: { type:String, required: true},
        email: {type:String}

    },
    {
        timestamps: true
    }
    
)

const Mant = new mongoose.model('Mant', mantSchema)

module.exports = Mant