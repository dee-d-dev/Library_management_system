const logout = require("../controllers/logout");
const router = require("express").Router();

router.get('/logout', logout)

module.exports = router
