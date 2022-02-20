const User = require("../models/user");

const getUsers = async (req, res) => {
  const users = await User.find().populate("book", {strictPopulate: true});
  // .select("_id name role email bookIssued");?
  res.send(users);
};

module.exports = getUsers;
