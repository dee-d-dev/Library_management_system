const createBook = require("../controllers/createBook");

const router = require("express").Router();

router.get("/book", createBook);

module.exports = router;
