const express = require("express");
const router = express.Router();
const deleteUser = require("../controllers/deleteUser");
const verifyToken = require("./auth");


router.delete("/:id",verifyToken, deleteUser);

module.exports = router;
