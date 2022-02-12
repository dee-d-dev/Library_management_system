// const User = require("../models/user");

const deleteBook = (req, res) => {
  //   const book = await User.findByIdAndDelete();

  //   res.send(book);
  res.send("delete books");
};

module.exports = deleteBook;
