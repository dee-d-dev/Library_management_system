const mongoose = require("mongoose");

const connect = (url) => {
  mongoose.connect(url, () => {
    console.log("database connected");
  });
};

module.exports = connect;
