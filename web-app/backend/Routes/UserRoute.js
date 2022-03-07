const express = require("express");
const { userSignUp } = require("../Controller/AuthController");
const router = express.Router();

router.route("/signup").post(userSignUp);

module.exports = router;
