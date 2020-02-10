const express = require('express')
const logger = require('morgan')
const mongoose = require('mongoose')
const cookieParser = require('cookie-parser')

//BD Configure
require('./config/db.config')

//Express Configure
const app = express()

app.use(logger('dev'))
app.use(cookieParser())


//lisen port
const port = process.env.PORT || '3000'
app.listen(port,()=>{
    console.log(`Running on port ${port}`)
})