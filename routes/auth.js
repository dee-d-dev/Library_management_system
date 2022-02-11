const createError = require("http-errors");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const verifyAccessToken = (req, res, next) => {
  const bearerToken = req.headers["authorization"];
  const tokens = bearerToken.split(" ");
  const token = tokens[1];

  // if (!tokens) return next(createError.Unauthorized());
  // // res.status(400).send("no token boss");

  jwt.verify(token, process.env.TOKEN_KEY, function (err, decoded) {
    if (err) return res.status(403).send("Forbidden");
    req.decoded = decoded;
    next();
  });
};

module.exports = verifyAccessToken;
