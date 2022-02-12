const express = require("express");
const router = express.Router();
const getUsers = require("../controllers/getUsersCtrl");
const verifyAccessToken = require("./auth");

router.get("/all",  getUsers);
// verifyAccessToken, 
(module.exports = router);
