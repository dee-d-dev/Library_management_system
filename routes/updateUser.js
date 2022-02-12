const updateUserCtrl = require("../controllers/updateUserProfile");
const verifyAccessToken = require("./auth");
const router = require("express").Router();

router.patch("/update/:id",verifyAccessToken, updateUserCtrl);

module.exports = router;
