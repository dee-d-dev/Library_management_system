const Author = require("../models/author");

const registerAuthor = async (req, res, next) => {
  const author = new Author(req.body);
  const { email } = req.body;

  if (author) {
    const authorExists = await Author.findOne({ email });

    if (!authorExists) {
      author
        .save()
        .then((author) => {
          // console.log(author);
          res.status(201).send(author);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      res.status(400).send("this Author has already been registered");
    }
  }
};

module.exports = registerAuthor;
