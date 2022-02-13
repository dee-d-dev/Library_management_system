const Book = require("../models/book");
const createBook = async (req, res) => {
  const book = new Book(req.body);
  const { name } = req.body;
  const bookExists = await Book.findOne({ name });

  if (bookExists) {
    return res.status(400).send("There is a book with this title in Library");
  }
  book.save(() => {
    return res.send(book);
  });
};

module.exports = createBook;
