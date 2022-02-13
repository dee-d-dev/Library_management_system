const Author = require("../models/author");

const getAuthors = async (req, res) => {
  const authors = await Author.find().select('name email books -_id');
  return res.send(authors);
};

module.exports = getAuthors;
