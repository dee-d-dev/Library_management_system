const mongoose = require("mongoose");
const User_Schema = new mongoose.Schema({
  name: String,
  role: { type: String, lowercase: true },
  email: String,
  age: Number,
  password: String,
  dateCreated: { type: Date, default: Date.now() },
  token: String,
});

const User = mongoose.model("User", User_Schema);

module.exports = User;
