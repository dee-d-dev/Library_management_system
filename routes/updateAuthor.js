const updateAuthorCtrl = require("../controllers/updateAuthor");
const verifyAccessToken = require("./auth");
const router = require("express").Router();

router.patch("/:id", updateAuthorCtrl);
// verifyAccessToken,
module.exports = router;
