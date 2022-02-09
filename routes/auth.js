const createError = require("http-errors");
const jwt = require("jsonwebtoken");

const verifyAccessToken = (req, res, next) => {
  if (!req.headers["authorization"]) {
    return next(createError.Unauthorized());
  }

  bearerToken = req.headers["authorization"];
  jwt.verify(bearerToken, process.env.TOKEN_KEY, (err, data) => {
    if (err) {
      return next(createError.Unauthorized());
    }
    req.data = data;
    // console.log(decoded.data);
  });
};

module.exports = verifyAccessToken;
