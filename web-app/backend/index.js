const express = require('express')
const app = express()
const morgan = require("morgan");
// Routes import
const product = require('./Routes/ProductRoute')


app.use(express.json());
app.use(morgan("dev"));
app.use((req, res, next) => {
  console.log("Hello from the Middleware");
  next();
});

app.use('/api/v1', product)

module.exports = app