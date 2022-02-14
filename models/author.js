const { type } = require("express/lib/response");
const mongoose = require("mongoose");

const authorSchema = new mongoose.Schema({
  name: { type: String, lowercase: true, required: true },
  books: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: "book",
    lowercase: true,
    required: true,
  },
  email: { type: String, lowercase: true, required: true },
  quantity: { type: Number, required: true },
});

const Author = mongoose.model("author", authorSchema);

module.exports = Author;
