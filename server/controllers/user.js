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
        res.status(200).json("Update successfully!");
      })
      .catch((err) => console.log(err));
  } else {
    return res.status(401).json("You can update only your account!");
  }
};
