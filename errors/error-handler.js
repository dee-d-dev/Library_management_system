const createError = require("http-errors");

const notFound = (req, res, next) => {
  next(createError.NotFound());
};

const errorHndlr = (err, req, res, next) => {
  res.status(err.status || 500).send({
    error: {
      status: err.status,
      message: err.message,
    },
  });
};

module.exports = { notFound, errorHndlr };
