const express = require("express");
const createAuthor = require("../controllers/createAuthor");
const verifyToken = require("./auth");
const router = express.Router();

router.post("/create", verifyToken, createAuthor);

module.exports = router;
