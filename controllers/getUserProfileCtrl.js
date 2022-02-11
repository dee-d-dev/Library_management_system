const User = require("../models/user");

const getUserProfile = async (req, res) => {
  const user = await User.findById(req._id);
  
  // console.log(req.user);
  res.send(user);
};

module.exports = getUserProfile;
