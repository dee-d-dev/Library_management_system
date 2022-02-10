const express = require("express");
const router = express.Router();
const getAuthors = require("../controllers/getAuthorsCtrl");
const verifyAccessToken = require("./auth");

router.get("/all", verifyAccessToken, getAuthors);

module.exports = router;
