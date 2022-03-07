//handled uncought exeption
process.on("uncaughtException", (err) => {
  console.log(`Error:${err.message}`);
  console.log("Shutting down the server due to uncought exeption error");
  process.exit(1);
});

const app = require("./index");
const dotenv = require("dotenv");
dotenv.config({ path: "backend/Config/config.env" });
const Database = require("./Config/database");



Database();

const server = app.listen(process.env.PORT, () => {
  console.log(`Server is working fine on http://localhost:${process.env.PORT}`);
});

// Unhandled promise Rejection
process.on("unhandledRejection", (err) => {
  console.log(`Error: ${err.message}`);
  console.log("Shutting down the server due to unhandled promise rejection");
  server.close(() => {
    process.exit(1);
  });
});
