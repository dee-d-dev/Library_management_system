const User = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

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
    if (user.role == "librarian") {
      const token = jwt.sign(
        { data: user.name, iss: "adedotun" },
        process.env.TOKEN_KEY,
        {
          expiresIn: "1h",
        }
      );

      user.token = token;
      res.header("bearer", token).send({ role: user.role, token: token });
    }
    return res.send({ role: user.role, token: user.token });
  } else {
    res.send("incorrect email or password");
  }
};

module.exports = LoginCtrl;
