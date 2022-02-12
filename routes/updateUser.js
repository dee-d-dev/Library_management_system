const updateUserCtrl = require("../controllers/updateUserProfile");
const router = require("express").Router();

router.get("/update", updateUserCtrl);

module.exports = router;
