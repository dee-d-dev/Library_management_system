const mongoose = require("mongoose");
const authSchema = require("../validators/authSchema");

const User_Schema = new mongoose.Schema({
  name: { type: String, lowercase: true, required: true },
  role: {
    type: String,
    required: true,
    enum: ["librarian", "staff", "student"],
    lowercase: true,
  },
  email: { type: String, lowercase: true, required: true, unique: true },
  age: { type: Number, required: true },
  password: { type: String, required: true },
  bookIssued: { type: [String] },
  dateCreated: { type: Date, default: Date.now() },
  token: { type: String, default: null },
});

const User = mongoose.model("User", User_Schema);

module.exports = User; 