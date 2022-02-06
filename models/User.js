const mongoose = require("mongoose");
const User_Schema = new mongoose.Schema({
  name: String,
  role: String,
  email: String,
  age: Number,
  password: String,
  dateCreated: { type: Date, default: Date.now() },
});

const User = mongoose.model("User", User_Schema);

// const user = new User({
//   name: "user three",
//   role: "Librarian",
//   emaiil: "userone@gmail.com",
//   age: 45,
//   password: "4567",
// });

// const result = user.save((err) => {
//   if (err) {
//     console.log(err);
//   }
// });
module.exports = User;
