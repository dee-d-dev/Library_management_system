const express = require("express");
const getUsers = require("../controllers/getAllUsersCtrl");
const router = express.Router();

router.get("/getAllUsers", getUsers);

module.exports = router;
