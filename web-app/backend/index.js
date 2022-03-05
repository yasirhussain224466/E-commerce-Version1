const express = require('express')
const app = express()
// Routes import
const product = require('./Routes/ProductRoute')
app.use('/api/v1', product)

module.exports = app