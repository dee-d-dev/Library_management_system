const User = require("../models/user");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const authSchema = require("../validators/authSchema");

const registerUser = async (req, res) => {
  const user = new User(req.body);
  const { email } = req.body;
  const hashedPassword = await bcrypt.hash(user.password, 10);

  const userExists = await User.findOne({ email });
  const result = authSchema.validateAsync(req.body);


  if (userExists) {
    res.status(400).send("this email has alrady been registered");
  }
  user.password = hashedPassword;
  user
    .save()
    .then((user) => {
      // console.log(user);
      res.status(201).send(user);
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
