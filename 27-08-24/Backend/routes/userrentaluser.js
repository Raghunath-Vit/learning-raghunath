const express = require("express");
const router = express.Router();
const User = require("../models/carrentalsuser");
const { body, validationResult } = require("express-validator");

router.get("/", async function (req, res, next) {
  try {
    const user = await User.find();
    if (!user) {
      res.status(404).json({ message: "CarUser is not available" });
    }
    res.json(user);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

router.get("/:id", async function (req, res, next) {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      res
        .status(404)
        .json({ message: "Particular get request carsRentalUser Not found" });
    }
    res.json(user);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

router.post(
  "/",
  [
    body("username").notEmpty().withMessage("Username is required"),
    body("email").isEmail().withMessage("Invalid email address"),
    body("age").isInt({ min: 0 }).withMessage("Age must be a positive integer"),
    body("gender")
      .isIn(["male", "female"])
      .withMessage("Gender must be male or female"),
    body("dob").isISO8601().toDate().withMessage("Invalid date of birth"),
    body("city").notEmpty().withMessage("City is required"),
    body("profession")
      .isIn(["IT", "Sales", "Unemployed"])
      .withMessage("Profession must be IT, Sales, or Unemployed"),
    body("password")
      .isLength({ min: 6 })
      .withMessage("Password must be at least 6 characters long"),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
      const newUser = new User(req.body);
      const newuser = await newUser.save();
      res.status(201).json(newUser);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }
);

router.put("/:id", async function (req, res, next) {
  try {
    const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!updatedUser) {
      res.status(404).json({ message: "Update not possible" });
    }
    res.json(updatedUser);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

router.patch("/:id", async function (req, res, next) {
  try {
    const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!updatedUser) {
      res.status(404).json({ message: "Patch request not done successfully" });
    }
    res.json(updatedUser);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

router.delete("/:id", async function (req, res, next) {
  try {
    const deleted = await User.findByIdAndDelete(req.params.id);
    if (!deleted) {
      res.status(404).json({ message: "Delete of Car User Not Done" });
    }
    res.json(deleted);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

module.exports = router;
