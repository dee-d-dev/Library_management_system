const express = require("express");
const router = express.Router();
const deleteBook = require("../controllers/deleteBook");

router.delete("/book", deleteBook);

module.exports = router;
