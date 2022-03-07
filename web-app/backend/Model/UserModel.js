const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");

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
    validate: {
      // this only works on save
      validator: function (el) {
        return el === this.password;
      },
      message: "Passwords are not the same",
    },
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

UserModel.pre('save', async function (next) {
  // only run this function when the password was accually modified
  if (!this.isModified("password")) return next();

  //hash the password with cost of 12
  this.password = await bcrypt.hash(this.password, 12);

  //delete passwordConfirm Field
  this.confirmPassword = undefined;
  next();
});

module.exports = mongoose.model("User", UserModel);
