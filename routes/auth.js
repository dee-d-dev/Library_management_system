const createError = require("http-errors");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const verifyAccessToken = (req, res, next) => {
  const bearerToken = req.header("authorization").split(" ");
  const token = bearerToken[1];

  if (!token) {
    // return next(createError.Unauthorized());
    res.send("no token boss");
  }

  if (token) {
    jwt.verify(token, process.env.TOKEN_KEY, function (err, decoded) {
      if (err) {
        return res.send("not allowed");
      }
      req.decoded = decoded;
      next();
    });
  }
};

module.exports = verifyAccessToken;
