const app = require("./index");
const dotenv = require("dotenv");
dotenv.config({ path: "backend/Config/config.env" });

app.listen(process.env.PORT, () => {
  console.log(`Server is working on http://localhost:${process.env.PORT}`);
});
