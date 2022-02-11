const User = require("../models/user");

const getUserProfile = async (req, res) => {
  const user = await User.findById(req.params.id).select('-_id name role email bookIssued');
  // console.log(req.user);
  res.send(user);
};

module.exports = getUserProfile;
