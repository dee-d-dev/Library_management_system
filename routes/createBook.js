const createBook = require("../controllers/createBook");

const route = require("express").Router();

route.get("/book", createBook);

module.exports = router;
