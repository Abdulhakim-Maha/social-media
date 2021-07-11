const express = require('express')

const router = express.Router()
const userController = require('../controllers/user')

//update user
router.put('/:userId', userController.updateUser)

//delete user
router.delete('/:userId', userController.deleteUser)

//get a user
router.get('/:userId', userController.getUser)

//follow a user
router.put('/:userId/follow', userController.followUser)

//unfollow a user
router.put('/:userId/unfollow', userController.unfollow)

module.exports = router;