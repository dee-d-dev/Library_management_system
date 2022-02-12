const Author = require("../models/author");

const getAuthor= async (req, res) => {
  const author = await Author.findById(req.params.id)
  res.send(author)
};

module.exports = getAuthor;
