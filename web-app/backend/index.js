const express = require("express");
const app = express();
const cookieParcer = require("cookie-parser");
const morgan = require("morgan");
const cors = require("cors");
const product = require("./Routes/ProductRoute");
const UserAuthentication = require("./Routes/AuthenticationRoute");
const GlobalErrorHandler = require("./Controller/ErrorController");
const AppError = require("./Utils/ErrorHandler");
const bodyParcer = require("body-parser");
const fileUpload = require("express-fileupload");

app.use(cors());
app.use(express.json());
app.use(cookieParcer());
app.use(bodyParcer.urlencoded({ extended: true }));
app.use(fileUpload());
app.use(morgan("dev"));
app.use((req, res, next) => {
  console.log("Hello from the Middleware");
  next();
});

app.use("/api/v1", product);
app.use("/api/v1/user", UserAuthentication);

app.all("*", (req, res, next) => {
  // console.log("Wrong Url")
  // res.status(500).json({
  //   status: 'fail',
  //   message: `Invalid URl ${req.originalUrl} `
  // })
  // next()

  // const err = new Error(`Invalid URl ${req.originalUrl}`)
  // err.status = 'fail'
  // err.statusCode = 400
  // next(err)

  next(new AppError(`Invalid URl ${req.originalUrl}`), 500);
});
app.use(GlobalErrorHandler);

module.exports = app;
