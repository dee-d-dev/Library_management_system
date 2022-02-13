const createBook = require("../controllers/createBook");

const router = require("express").Router();

router.post("/book", createBook);

module.exports = router;
