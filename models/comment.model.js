const mongoose = require ('mongoose')

const commentSchema = new mongoose.Schema(
    {
        machineId = { type: mongoose.Schema.Types.ObjectId, ref: 'Machine'},
        authorId: { type: mongoose.Schema.Types.ObjectId, ref: 'Mant' },
        comment = { type: Array }
    }

)

const Comment = new mongoose.model ('Comment',commentSchema)
module.exports = Comment