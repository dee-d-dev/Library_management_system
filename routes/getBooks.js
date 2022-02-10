const express = require("express");
const router = express.Router();
const getBooks = require("../controllers/getBooksCtrl");
const verifyAccessToken = require("./auth");

router.get("/all", verifyAccessToken, getBooks);

module.exports = router;
