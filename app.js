const express = require("express");
const connect = require("./db_connection/connect");
const app = express();
require("dotenv").config();
const loginRouter = require("./routes/login");
const registerRouter = require("./routes/registerUser");
const getUsersRouter = require("./routes/getUsers");
const bodyParser = require("body-parser");

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
connect(process.env.MONGO_URI);

app.use("/login", loginRouter);
app.use("/reg", registerRouter);
app.use("/getusers", getUsersRouter);

app.listen(6060, () => {
  console.log("running");
});
