const createBook = require("../controllers/createBook");
const verifyToken = require("./auth");
const router = require("express").Router();

router.post("/book", verifyToken, createBook);

module.exports = router;
