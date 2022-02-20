const updateBook = require("../controllers/updateBook");
const verifyAccessToken = require("./auth");
const router = require("express").Router();

router.patch("/allBooks", updateBook);

// verifyAccessToken,
module.exports = router;
