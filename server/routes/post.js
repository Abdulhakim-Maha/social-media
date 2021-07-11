const express = require('express')

const router = express.Router()
const postController = require('../controllers/post')

//create a post
router.post('/', postController.createPost)

//update a post
router.put('/:postId', postController.updatePost)

//delete a post 
//like a post 
//get a post
//get timeline post

module.exports = router;