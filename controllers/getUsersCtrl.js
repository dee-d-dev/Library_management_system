const User = require("../models/user");

const getUsers = async (req, res) => {
  const users = await User.find().select("_id name role email bookIssued");
// .populate('book')
  res.send(users);
};

module.exports = getUsers;
