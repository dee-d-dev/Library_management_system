const Book = require("../models/book");

const getBooks = async (req, res) => {
  const books = await Book.find().populate('author');

  return res.send(books);
};

module.exports = getBooks;
