const express = require("express");
const router = express.Router();
const deleteUser = require("../controllers/deleteUser");

router.get("/:id", deleteUser);

module.exports = router;
