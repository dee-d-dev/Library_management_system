const express = require("express");
const connect = require("./db_connection/connect");
const app = express();
require("dotenv").config();
const loginRouter = require("./routes/login");
const registerRouter = require("./routes/registerUser");
const getUsersRouter = require("./routes/getUsers");
const getAuthorsRouter = require("./routes/getAuthors");
const getAuthor = require("./routes/getAuthor");
const getBooksRouter = require("./routes/getBooks");
const bodyParser = require("body-parser");
const { notFound, errorHndlr } = require("./errors/error-handler");
const getUserProfile = require("./routes/getUserProfile");
const updateUser = require("./routes/updateUser");
const deleteUser = require("./routes/deleteUser");
const deleteBook = require("./routes/deleteBook");
const getBook = require("./routes/getBook");
const createAuthor = require("./routes/createAuthor");
const updateAuthor = require("./routes/updateAuthor");
const logOut = require("./routes/logout");
const createBook = require("./routes/createBook");

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
connect(process.env.MONGO_URI);

app.use("/auth", loginRouter);
app.use("/auth", registerRouter);
app.use("/users", getUsersRouter);
app.use("/authors", getAuthorsRouter);
app.use("/author", getAuthor);
app.use("/books", getBooksRouter);
app.use("/book", getBook);
app.use("/user", getUserProfile);
app.use("/user/update", updateUser);
app.use("/user/delete", deleteUser);
app.use("/book/delete", deleteBook);
app.use("/author", createAuthor);
app.use("/author/update", updateAuthor);
app.use("/user/profile", logOut);
app.use("/create", createBook);

app.use(notFound);
app.use(errorHndlr);

app.listen(6060, () => {
  console.log("running");
});
