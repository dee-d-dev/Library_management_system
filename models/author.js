const { type } = require("express/lib/response");
const mongoose = require("mongoose");

const authorSchema = new mongoose.Schema({
  name: { type: String, required: true },
  books: { type: [String], required: true },
  email: { type: String, required: true },
  quantity: { type: Number, required: true },
});

const Author = mongoose.model("author", authorSchema);

module.exports = Author;
