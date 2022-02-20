const User = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const LoginCtrl = async (req, res) => {
  const { email, password } = req.body;
  if (!(email && password)) {
    res.send("email and password is required");
  }

  const user = await User.findOne({ email });
  if (!user) return res.send("cannot find user");

  let authorized = await bcrypt.compare(password, user.password);
  if (!authorized) res.send("incorrect email or password");

  if (user.role !== "librarian")
    return res.send({ role: user.role, token: user.token });

  const token = jwt.sign(
    { data: user.name, iss: "adedotun" },
    process.env.TOKEN_KEY,
    {
      expiresIn: "24h",
    }
  );

  user.token = token;
  res.header("bearer", token).send(token);
};

module.exports = {LoginCtrl}
