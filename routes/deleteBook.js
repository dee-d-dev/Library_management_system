const express = require("express");
const router = express.Router();
const deleteBook = require("../controllers/deleteBook");
const verifyToken = require("./auth");


router.delete("/book",verifyToken, deleteBook);

module.exports = router;
