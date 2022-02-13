const express = require("express");
const router = express.Router();
const getBook = require("../controllers/getBookCtrl");

router.get("/book", getBook);

module.exports = router;
