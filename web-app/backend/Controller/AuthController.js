const User = require("../Model/UserModel");
const CatchAsync = require("../Utils/CatchAsync");
const AppError = require("../Utils/ErrorHandler");

exports.userSignUp = CatchAsync(async (req, res, next) => {
  const newUser = await User.create({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    confirmPassword: req.body.confirmPassword,
    avatar: req.body.avatar,
    role: req.body.role,
  });

  res.status(201).json({
    status: "success",
    data: newUser,
  });
});
