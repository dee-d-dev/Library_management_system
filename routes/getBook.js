const express = require("express");
const router = express.Router();
const getBook = require("../controllers/getBookCtrl");

router.get("/:id", getBook);

module.exports = router;
