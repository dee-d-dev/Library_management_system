const User = require("../models/User");

const registerUser = (req, res) => {
  const user = new User(req.body);

  user
    .save()
    .then((user) => {
      console.log(user);
      res.send(user);
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = registerUser;
