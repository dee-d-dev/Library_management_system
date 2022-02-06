const express = require("express");
const connect = require("./db_connection/connect");
const app = express();
require("dotenv").config();
const loginRouter = require("./routes/login");
const registerRouter = require("./routes/registerUser");

app.use(express.json());
connect(process.env.MONGO_URI);
app.use("/", loginRouter);
app.use("/", registerRouter);

app.listen(6060, () => {
  console.log("running");
});
