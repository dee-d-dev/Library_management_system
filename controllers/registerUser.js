const User = require("../models/user");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const registerUser = async (req, res) => {
  const user = new User(req.body);

  const hashedPassword = await bcrypt.hash(user.password, 10);
  user.password = hashedPassword;
  user
    .save()
    .then((user) => {
      console.log(user);
      res.status(201).send("account succesfully created");
    })
    .catch((err) => {
      console.log(err);
    });

  //create token
  if (user.role == "librarian") {
    const token = jwt.sign({ data: user.name }, process.env.TOKEN_KEY, {
      expiresIn: 500,
    });

    user.token = token;
  }
};

module.exports = registerUser;
