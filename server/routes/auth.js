const express = require('express')

const router = express.Router()
const authController = require('../controllers/auth')

//Register
router.post('/register', authController.postRegister)

//login
router.post('/login', authController.postLogin )

module.exports = router;