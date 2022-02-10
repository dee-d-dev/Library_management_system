const express = require("express");
const connect = require("./db_connection/connect");
const app = express();
require("dotenv").config();
const loginRouter = require("./routes/login");
const registerRouter = require("./routes/registerUser");
const getUsersRouter = require("./routes/getUsers");
const getAuthorsRouter = require("./routes/getAuthors");
const getBooksRouter = require("./routes/getBooks");
const bodyParser = require("body-parser");
const { notFound, errorHndlr } = require("./errors/error-handler");

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
connect(process.env.MONGO_URI);

app.use("/auth", loginRouter);
app.use("/auth", registerRouter);
app.use("/users", getUsersRouter);
app.use("/authors", getAuthorsRouter);
app.use("/books", getBooksRouter);

app.use(notFound);
app.use(errorHndlr);

app.listen(6060, () => {
  console.log("running");
});
