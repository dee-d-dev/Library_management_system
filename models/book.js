const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  ISBN: {type: Number, required: true, minlength: 10},
  price: {type: Number, required: true},
  pages: {type: Number, required: true},
  quantity: {type: Number, required: true},
  author: { type: [String], required: true },
});

const Book = mongoose.model("book", bookSchema);

module.exports = Book;
