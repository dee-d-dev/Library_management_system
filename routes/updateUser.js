const updateUserCtrl = require("../controllers/updateUserProfile");
const router = require("express").Router();

router.patch("/update/:id", updateUserCtrl);

module.exports = router;
