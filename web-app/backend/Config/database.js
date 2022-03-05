const mongoose = require("mongoose");
const DB = process.env.DATABASE_URL.replace("<password>", process.env.PASSWORD);
const Database = () => {
  mongoose
    .connect(DB, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then((data) => {
      console.log(
        `MongoDB has connected successfully on port: ${data.connection.host}`
      );
    })
    .catch((err) => {
      console.log(err);
    });
};
module.exports = Database;
