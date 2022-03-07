const mongoose = require("mongoose");
const validator = require("validator");

const UserModel = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please tell us your NAME!"],
    maxLenght: [30, "name cannot exceed 30 character"],
    minLenght: [4, "name should have more than 4 character"],
    trim: true,
  },
  email: {
    type: String,
    unique: true,
    required: [true, "Please provide a valid EMAIL!"],
    validate: [validator.isEmail, "Please provide a valid EMAIL!"],
    trim: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: [true, "Please provide a PASSWORD!"],
    minLenght: [8, "Password should have greater than 8 character"],
    select: false,
  },
  confirmPassword: {
    type: String,
    required: [true, "Please Confirm your PASSWORD!"],
    select: false,
  },
  avatar: {
    public_id: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
  },
  role: {
    type: String,
    default: "user",
  },
});

module.exports = mongoose.model("User", UserModel);
