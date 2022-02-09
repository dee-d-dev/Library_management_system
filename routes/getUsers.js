const express = require("express");
const router = express.Router();
const getUsers = require("../controllers/getUsersCtrl");

router.get("/", getUsers);

module.exports = router