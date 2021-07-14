const express = require('express')

const router = express.Router()
const postController = require('../controllers/post')

//create a post
router.post('/', postController.createPost)

//update a post
router.put('/:postId', postController.updatePost)

//delete a post 
router.delete('/:postId', postController.deletePost)

//like a post 
router.put('/:postId/like', postController.likePost)

//get timeline post
router.get('/timeline/:userId', postController.getTimeline)

//get a post
router.get('/:postId', postController.getPost)

module.exports = router;