const express = require('express')

const router = express.Router()
const userController = require('../controllers/user')

//update user
router.put('/:userId', userController.updateUser)
//delete user
//get a user
//follow a user
//unfollow a user
module.exports = router;