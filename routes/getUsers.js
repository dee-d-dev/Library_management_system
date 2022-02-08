const express = require("express");
const router = express.Router();
const getUsers = require("../controllers/getUsersCtrl");

router.get("/allusers", getUsers);

module.exports = router