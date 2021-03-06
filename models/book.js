const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  title: { type: String, lowercase: true, required: true },
  ISBN: { type: Number, required: true, minlength: 10 },
  price: { type: Number, required: true },
  pages: { type: Number, required: true },
  quantity: { type: Number, required: true },
  author: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: "author",
    required: true,
  },
});

const Book = mongoose.model("book", bookSchema);

module.exports = Book;
