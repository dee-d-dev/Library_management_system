const Book = require("../models/book");
const createBook = async (req, res) => {
  const book = new Book(req.body);
  const { title } = req.body;
  const { quantity } = req.body;

  const bookExists = await Book.findOne({ title });

  if (bookExists) {
    return res.status(400).send("There is a book with this title in Library");
  }
  book.save((err) => {
    if (err) return res.send(err.message);
    return res.send(book).populate("author");
  });
};

module.exports = createBook;
