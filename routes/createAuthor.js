const express = require("express");
const createAuthor = require("../controllers/createAuthor");
const router = express.Router();

router.post("/create", createAuthor);

module.exports = router;
