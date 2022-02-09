const express = require("express");
const router = express.Router();
const LoginCtrl = require("../controllers/loginCtrl");
const verifyAccessToken = require("./auth");

router.get("/login", LoginCtrl);

module.exports = router;
