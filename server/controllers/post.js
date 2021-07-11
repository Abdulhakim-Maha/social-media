const Post = require("../models/post");

//try to work with async await
exports.createPost = async (req, res, next) => {
  const newPost = new Post(req.body);
  try {
    const savePost = await newPost.save();
    return res.status(200).json(savePost);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
};

exports.updatePost = async (req, res, next) => {
  try {
    const post = await Post.findById(req.params.postId);
    if (post.userId === req.body.userId) {
		await post.updateOne({ $set: req.body})
		res.status(200).json('this post has been updated!')
    } else {
      res.status(403).json("you can update on your own post!");
    }
  } catch (err) {
	  console.log(err)
	  res.status(500).json(err)
  }
};
