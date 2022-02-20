const User = require("../models/user");

const getUsers = async (req, res) => {
  const users = await User.find().populate('bookIssued').select("_id name role email bookIssued");
  res.send(users);
};

module.exports = getUsers;
