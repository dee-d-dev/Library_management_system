const user = require("../models/User");
const LoginCtrl = (req, res) => {
  const { email, password } = req.body;
  if (!(email && passwrd)) {
    res.send("email and password is required");
  }
};

module.exports = LoginCtrl;
