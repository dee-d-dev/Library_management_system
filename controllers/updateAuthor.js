const Author = require("../models/author");

const updateAuthorCtrl = async (req, res) => {
  let author = await Author.findByIdAndUpdate(
    req.params.id,
    {
      name: req.body.name,
      books: req.body.books,
      email: req.body.email,
      quantity: req.body.quantity,
    },
    { new: true }
  );

  res.send(author);
};

module.exports = updateAuthorCtrl;
