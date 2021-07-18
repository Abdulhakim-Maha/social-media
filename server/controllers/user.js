const bcrypt = require("bcrypt");
const User = require("../models/user");

exports.updateUser = (req, res, next) => {
  if (req.body.userId === req.params.userId || req.user.isAdmin) {
    if (req.body.password) {
      bcrypt
        .hash(req.body.password, 12)
        .then((hashed) => {
          req.body.password = hashed;
        })
        .catch((err) => console.log(err));
    }
    User.findByIdAndUpdate(req.params.userId, {
      $set: req.body,
    })
      .then((result) => {
        console.log("Update successfully!");
        return res.status(200).json("Update successfully!");
      })
      .catch((err) => console.log(err));
  } else {
    return res.status(401).json("You can update only your account!");
  }
};

exports.deleteUser = (req, res, next) => {
  if (req.body.userId === req.params.userId || req.body.isAdmin) {
    User.deleteOne({ _id: req.params.userId })
      .then((result) => {
        console.log("Delete successfully!");
        return res.status(200).json("Account has been deleted!");
      })
      .catch((err) => console.log(err));
  } else {
    return res.status(401).json("You can update only your account!");
  }
};

exports.getUser = (req, res, next) => {
  const userId = req.query.userId;
  const username = req.query.username;
  if (userId) {
    User.findById(userId)
      .then((user) => {
        if (user) {
          const { password, updatedAt, ...other } = user._doc;
          return res.status(200).json(other);
        }
      })
      .catch((err) => {
        res.status(401).json(err);
      });
  } else if (username) {
    User.findOne({ username: username })
      .then((user) => {
        if (user) {
          const { password, updatedAt, ...other } = user._doc;
          return res.status(200).json(other);
        }
      })
      .catch((err) => {
        res.status(401).json(err);
      });
  }
};

exports.followUser = (req, res, next) => {
  if (req.body.userId !== req.params.userId) {
    let userNeedToFollow;
    User.findById(req.params.userId)
      .then((user) => {
        userNeedToFollow = user;
      })
      .catch((err) => {
        console.log(err);
      });
    User.findById(req.body.userId)
      .then((currentUser) => {
        if (userNeedToFollow) {
          if (!userNeedToFollow.followers.includes(req.body.userId)) {
            userNeedToFollow
              .updateOne({ $push: { followers: req.body.userId } })
              .then((result) => {
                console.log("followers added!");
              })
              .catch((err) => console.log(err));
            currentUser
              .updateOne({ $push: { followings: req.params.userId } })
              .then((resutl) => {
                console.log("followings added!");
              })
              .catch((err) => console.log(err));
            return res.status(200).json("this user has been followed!");
          } else {
            return res.status(403).json("you already follow this user");
          }
        }
      })
      .catch((err) => console.log(err));
  } else {
    res.status(403).json("You cannot follow yourself!");
  }
};

exports.unfollow = (req, res, next) => {
  if (req.body.userId !== req.params.userId) {
    let userNeedToUnFollow;
    User.findById(req.params.userId)
      .then((user) => {
        userNeedToUnFollow = user;
      })
      .catch((err) => {
        console.log(err);
      });
    User.findById(req.body.userId)
      .then((currentUser) => {
        if (userNeedToUnFollow) {
          if (userNeedToUnFollow.followers.includes(req.body.userId)) {
            userNeedToUnFollow
              .updateOne({ $pull: { followers: req.body.userId } })
              .then((result) => {
                console.log("followers removed!");
              })
              .catch((err) => console.log(err));
            currentUser
              .updateOne({ $pull: { followings: req.params.userId } })
              .then((resutl) => {
                console.log("followings removed!");
              })
              .catch((err) => console.log(err));
            return res.status(200).json("this user has been unfollowed!");
          } else {
            return res.status(403).json("you dont follow this user");
          }
        }
      })
      .catch((err) => console.log(err));
  } else {
    res.status(403).json("You cannot follow yourself!");
  }
};

exports.getFriends = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.userId);
    const friends = await Promise.all(
      user.followings.map((friendId) => {
        return User.findById(friendId);
      })
    );
    let friendsList = [];
    friends.map((friend) => {
      const { _id, username, profilePicture } = friend;
      friendsList.push({ _id, username, profilePicture });
    });
    res.status(200).json(friendsList);
  } catch (err) {
    res.status(500).json(err);
  }
};
