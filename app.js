const express = require('express')
const logger = require('morgan')
const mongoose = require('mongoose')
const cookieParser = require('cookie-parser')

//BD Configure
require('./config/db.config')

//Express Configure
const app = express()

app.use(express.json())  // Habilitar Express.json
app.use(logger('dev'))
app.use(cookieParser())

// configure Routes
const router = require('./config/routes.config')
app.use('/',router)


//lisen port
const port = process.env.PORT || '3000'
app.listen(port,()=>{
    console.log(`Running on port ${port}`)
})