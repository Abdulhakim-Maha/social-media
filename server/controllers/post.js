const Post = require("../models/post");
const User = require("../models/user");

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
      await post.updateOne({ $set: req.body });
      res.status(200).json("this post has been updated!");
    } else {
      res.status(403).json("you can update on your own post!");
    }
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
};

exports.deletePost = async (req, res, next) => {
  try {
    const post = await Post.findById(req.params.postId);
    if (post.userId === req.body.userId) {
      await post.deleteOne();
      res.status(200).json("this post has been deleted!");
    } else {
      res.status(403).json("you can delete on your own post!");
    }
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
};

exports.likePost = async (req, res, next) => {
  try {
    const post = await Post.findById(req.params.postId);
    if (!post.likes.includes(req.body.userId)) {
      await post.updateOne({ $push: { likes: req.body.userId } });
      return res.status(200).json("this post has been liked!");
    } else {
      await post.updateOne({ $pull: { likes: req.body.userId } });
      return res.status(200).json("this post has been disliked!");
    }
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
};

exports.getPost = async (req, res, next) => {
  try {
    const post = await Post.findById(req.params.postId);
    console.log(post);
    res.status(200).json(post);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
};

exports.getTimeline = async (req, res, next) => {
  try {
    const currentUser = await User.findById(req.params.userId);
    const userPosts = await Post.find({ userId: currentUser._id });
    const friendPosts = await Promise.all(
      currentUser.followings.map((friendId) => {
        console.log(friendId)
        Post.find({ userId: friendId });
      })
    );
    console.log(friendPosts)
    res.status(200).json(userPosts.concat(...friendPosts)); 
  } catch (err) {
    res.status(500).json(err);
  }
}; 

exports.getUserPosts = async (req, res, next) => {
  try {
    const user = await User.findOne({username:req.params.username})
    const posts = await Post.find({userId:user._id})
    res.status(200).json(posts); 
  } catch (err) {
    res.status(500).json(err);
  }
}; 
