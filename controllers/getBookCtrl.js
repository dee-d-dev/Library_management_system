const Book = require("../models/book");

const getBook = async (req, res) => {
  const { title } = req.body;
  const book = await Book.findOne({ title })
    .populate("author")
    .select("title author");

  if (!book) res.status(400).send("Sorry, We cannot find book in the Library");

  return res.send(book);
};

module.exports = getBook;
