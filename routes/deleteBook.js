const express = require("express");
const router = express.Router();
const deleteBook = require("../controllers/deleteBook");

router.get("/:id", deleteBook);

module.exports = router;
