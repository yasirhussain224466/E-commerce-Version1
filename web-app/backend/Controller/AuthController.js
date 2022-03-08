const jsonwebtoken = require("jsonwebtoken");
const User = require("../Model/UserModel");
const CatchAsync = require("../Utils/CatchAsync");
const AppError = require("../Utils/ErrorHandler");
const jwt = require("jsonwebtoken");
const { exists } = require("../Model/UserModel");
const { token } = require("morgan");

exports.userSignUp = CatchAsync(async (req, res, next) => {
  const newUser = await User.create({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    confirmPassword: req.body.confirmPassword,
    avatar: req.body.avatar,
  });

  const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });

  res.status(201).json({
    status: "success",
    token: token,
    data: newUser,
  });
});

exports.login = CatchAsync(async (req, res, next) => {
  const { email, password } = req.body;

  // 1) check if email and password acually exists
  if (!email || !password) {
    return next(new AppError("Please provide email and Password"));
  }
  // 2) check if user exists and is password correct or not?
  // 3) is everything ok? then send token to the client
  const token = ""
  res.status(200).json({
      status:'success',
      token
  })
});
