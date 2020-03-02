const cors = require('cors')

const corsMiddleware = cors({
  origin: process.env.CORS_ORIGIN || 'http://localhost:3000',
  methods: ['GET,HEAD,PUT,PATCH,POST,DELETE'],
  allowedHeaders: ['Content-Type'],
  credentials: true
})

module.exports = corsMiddleware