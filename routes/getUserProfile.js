const express = require("express");
const router = express.Router();
const getUserProfile = require("../controllers/getUserProfileCtrl");
const verifyAccessToken = require("./auth");

router.get("/:id", verifyAccessToken, getUserProfile);

module.exports = router;
