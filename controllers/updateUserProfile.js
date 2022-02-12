const User = require("../models/user");

const updateUserCtrl = async (req, res) => {
  let user = await User.findByIdAndUpdate(
    req.params.id,
    {
      name: req.body.name,
      email: req.body.email,
      age: req.body.age,
    },
    { new: true }
  );

  res.send(user);
};

module.exports = updateUserCtrl;
