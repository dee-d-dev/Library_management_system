const express = require('express')
const router = express.Router()
const {LoginCtrl}=require('../controllers/loginCtrl')

router.get('/login', LoginCtrl )

module.exports = router