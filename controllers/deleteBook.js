const Book = require("../models/book");

const deleteBook = async (req, res) => {
  const { title } = req.body;
  const book = await Book.findOneAndDelete({ title });
  if (!book) return res.send(`The book to be deleted does not exist in the Library`);

  return res.send(`deleted ${title} book from the Library`);
};

module.exports = deleteBook;
