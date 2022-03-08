const express = require("express");
const { userSignUp, login } = require("../Controller/AuthController");
const router = express.Router();

router.route("/signup").post(userSignUp);
router.route("/login").post(login)

module.exports = router;
