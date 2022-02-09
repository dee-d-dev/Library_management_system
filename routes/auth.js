const createError = require("http-errors");
const jwt = require("jsonwebtoken");

const verifyAccessToken = (req, res, next) => {
  if (!req.header("authorization")) {
    return next(createError.Unauthorized());
  }

  bearerToken = req.header("authorization");
  jwt.verify(bearerToken, process.env.TOKEN_KEY, (err, data) => {
    if (err) {
      return next(createError.Unauthorized("You cannot access this route"));
    }
    req.user = data;
    next();
    // console.log(decoded.data);
  });
};

module.exports = verifyAccessToken;
