const User = require("../models/user");
const bcrypt = require("bcrypt");

exports.postRegister = (req, res, next) => {
  bcrypt
    .hash(req.body.password, 12)
    .then((hashed) => {
      const user = new User({
        username: req.body.username,
        email: req.body.email,
        password: hashed,
      });
      return user.save();
    })
    .then((user) => {
      if (user) {
        console.log(user);
      }
      res.status(201).json(user);
    })
    .catch((err) => console.log(err));
};

exports.postLogin = (req, res, next) => {
  User.findOne({ email: req.body.email })
    .then((user) => {
      if (!user) {
        return res.status(404).json("user not found!");
      }
      bcrypt
        .compare(req.body.password, user.password)
        .then((isValid) => {
			if(!isValid){
				return res.status(400).json('invalid password')
			}
			res.status(200).json(user)
		})
        .catch((err) => console.log(err));
    })
    .catch((err) => console.log(err));
};
