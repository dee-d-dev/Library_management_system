const express = require("express");
const router = express.Router();
const getUsers = require("../controllers/getUsersCtrl");

router.get("/all", getUsers);

module.exports = router