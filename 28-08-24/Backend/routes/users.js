const express = require("express");
const router = express.Router();
const usersControllers = require("../controllers/users");

router.get("/", usersControllers.index);
router.get("/contact", function (req, res, next) {
  res.send("contact us from users");
});

router.post("/login", usersControllers.login);

router.post("/", usersControllers.createUser);
module.exports = router;
