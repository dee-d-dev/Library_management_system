const Book = require("../models/book");

const updateBook = async (req, res) => {
  let book = await Book.updateOne(
    {
      ISBN: req.body.ISBN,
    },
    {
      $inc: {
        quantity: req.body.quantity,
      },
    },
    { new: true }
  );

  res.send(book);
};

module.exports = updateBook;
