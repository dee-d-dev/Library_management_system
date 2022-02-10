const createError = require("http-errors");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const verifyAccessToken = (req, res, next) => {
  const token = req.header("authorization");
  if (!token) {
    return next(createError.Unauthorized());
  }

  try {
    const decoded = jwt.verify(token, process.env.TOKEN_KEY);

    req.user = decoded;

    next();
    // console.log(decoded.data);
  } catch (err) {
    return next(createError.Unauthorized("You cannot access this route"));
  }
};

module.exports = verifyAccessToken;
