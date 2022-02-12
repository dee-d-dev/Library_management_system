const express = require("express");
const router = express.Router();
const getAuthor = require("../controllers/getAuthorCtrl");

router.get("/:id", getAuthor);

module.exports = router;
