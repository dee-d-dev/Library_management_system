const Book = require("../models/book");

const getBooks = async (req, res) => {
  const books = await Book.find();

  return res.send(books);
};

module.exports = getBooks;
