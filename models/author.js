const { type } = require("express/lib/response");
const mongoose = require("mongoose");

const authorSchema = new mongoose.Schema({
  name: { type: String, required: true  },
});
