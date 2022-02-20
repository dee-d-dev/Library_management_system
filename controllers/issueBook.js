const User = require("../models/user");
const Book = require("../models/book");

const issueBook = async (req, res) => {
  const users = await User.findByIdAndUpdate(
    req.params.id,
    {
      bookIssued: req.body._id,
    },
    { new: true }
  );

  res.send(users);
};

module.exports = issueBook;
