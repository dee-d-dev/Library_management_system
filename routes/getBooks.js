const express = require("express");
const router = express.Router();
const getBooks = require("../controllers/getBooksCtrl");

router.get("/all", getBooks);

module.exports = router;
