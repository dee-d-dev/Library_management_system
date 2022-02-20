const User = require("../models/user");
const Book = require("../models/book");

const issueBook = async (req, res) => {
  const users = await User.findByIdAndUpdate(
    req.params.id,
    {
      bookIssued: req.body._id,
    },
    { new: true }
  ).select("_id name role email bookIssued");

  res.send(users);
};

module.exports = issueBook;
