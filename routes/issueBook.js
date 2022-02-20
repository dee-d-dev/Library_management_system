const issueBook = require("../controllers/issueBook");
const verifyToken = require("./auth");
const router = require("express").Router();

// verifyToken

router.post("/issuebook/:id", issueBook);


module.exports = router;
