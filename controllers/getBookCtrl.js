const Book = require("../models/book");

const getBook = async (req, res) => {
  const { name } = req.body;
  const book = await Book.findOne({ name });

  if (!book) res.status(400).send("Sorry, We cannot find book in the Library");

  return res.send(book);
};

module.exports = getBook;
