const User = require("../models/user");
const bcrypt = require("bcrypt");

const LoginCtrl = async (req, res) => {
  const { email, password } = req.body;
  if (!(email && password)) {
    res.send("email and password is required");
  }

  const user = await User.findOne({ email });
  if (user == null) {
    res.send("cannot find user");
  }

  if (await bcrypt.compare(password, user.password)) {
    res.send("logged in");
  } else {
    res.send("incorrect email or password");
  }
};

module.exports = LoginCtrl;
