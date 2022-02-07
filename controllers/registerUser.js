const User = require("../models/user");
const jwt = require("jsonwebtoken");

const registerUser = (req, res) => {
  const user = new User(req.body);

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
  const token = jwt.sign({ data: user.name }, process.env.TOKEN_KEY, {
    expiresIn: 500,
  });

  user.token = token;
};

module.exports = registerUser;
