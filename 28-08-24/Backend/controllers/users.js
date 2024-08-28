const User = require("../models/users");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

exports.createUser = async function (req, res, next) {
  let user = await User.findOne({
    email: req.body.email,
  });
  if (user) {
    return res.status(400).json({
      msg: "User does already exsists",
    });
  }
  const salt = await bcrypt.genSalt(10);
  let encryptedPassword = await bcrypt.hash(req.body.password, salt);
  let userOb = new User({
    username: req.body.username,
    email: req.body.email,
    password: encryptedPassword,
    isValid: req.body.isValid,
  });
  console.log(userOb);
  const result = await userOb.save();
  res.json({ status: 1, data: result });
};
exports.index = function (req, res, next) {
  res.send("respond with a resource");
};

exports.login = async function (req, res) {
  const { email, password } = req.body;
  let user = await User.findOne({
    email: req.body.email,
  });
  if (!user) {
    return res.status(404).json({ message: "User Not Exist" });
  }
  //encrypted password
  const passCorrect = await bcrypt.compare(password, user.password);
  if (!passCorrect) {
    return res.status(404).json({ message: "Password not correct" });
  }
  //if password is correct then we create a jwt token
  // payload is the data that is sent inside the token to the user
  const payload = {
    user: {
      id: user.id,
      email: email,
    },
  };
  //we are creating a jwt token to send to the front end to let user login
  jwt.sign(
    payload,
    process.env.JWT_SECRET,
    {
      expiresIn: 1200,
    },
    (err, token) => {
      if (err) throw err;
      res.status(200).json({
        token,
      });
    }
  );
};
