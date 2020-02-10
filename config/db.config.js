const mongoose = require ('mongoose')

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/base-api'

mongoose.connect(MONGODB_URI,{ useNewUrlParser:true })
    .then(() => console.info(`Success conection in ${MONGODB_URI}`))
    .catch((error) => console.error(`Error => ${error}`))