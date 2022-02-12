// const User = require("../models/user");

const deleteUser = (req, res) => {
  // const users = await User.findByIdAndDelete();

  res.send('delete user');
};

module.exports = deleteUser;
