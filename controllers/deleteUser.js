const User = require("../models/user");

const deleteUser = async (req, res) => {
  const users = await User.findByIdAndDelete(req.params.id);

  res.send(`deleted user with id: ${req.params.id}`);
};

module.exports = deleteUser;
