const express = require("express");
const router = express.Router();
const getAuthors = require("../controllers/getAuthorsCtrl");


router.get("/all", getAuthors);

module.exports = router;
