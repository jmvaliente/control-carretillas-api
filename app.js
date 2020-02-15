const express = require('express')
const logger = require('morgan')
const cookieParser = require('cookie-parser')

//Session Configure
const session = require('./config/session.config')

//BD Configure
require('./config/db.config')

//Express Configure
const app = express()

app.use(express.json())  // Habilitar Express.json
app.use(logger('dev'))
app.use(cookieParser())
app.use(session)
    // define Current USER
app.use((req, res, next) => {
    res.locals.currentUser = req.session.user
    req.currentUser = req.session.user
    next()
})


// configure Routes
const router = require('./config/routes.config')
app.use('/',router)


//lisen port
const port = process.env.PORT || '3000'
app.listen(port,()=>{
    console.log(`Running on port ${port}`)
})