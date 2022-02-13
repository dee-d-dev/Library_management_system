const Author = require("../models/author");

const getAuthor = async (req, res) => {
  const author = await Author.findById(req.params.id).select('-_id name email books quantity');
  // if (!author) return res.status(400).send("the author id input is wrong");
  return res.send(author);
};

module.exports = getAuthor;
