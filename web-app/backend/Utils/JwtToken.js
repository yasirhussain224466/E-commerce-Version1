// const sendToken = (user, statusCode, res, auth) => {
//   const token = user.jwtToken(user._id);
//   console.log(token)
//   // option for cookie
//   const options = {
//     expires: new Date(
//       Date.now() + process.env.COOKIE_EXPIRE * 24 * 60 * 60 * 1000
//     ),
//     httpOnly: true,
//   };
//   if (auth == "signup") {
//     user = user;
//   } else if (auth == "login") {
//     user = undefined;
//   }
//   res.status(statusCode).cookie("token", token, options).json({
//     status: "success",
//     token: token,
//     data: user,
//   });
// };
// module.exports = sendToken;
