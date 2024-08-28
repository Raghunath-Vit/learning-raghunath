const express = require("express");
const { body, validationResult } = require("express-validator");
const Todo = require("../models/todo");
const router = express.Router();

// POST a new todo
router.post(
  "/",
  [
    body("name")
      .trim()
      .notEmpty()
      .withMessage("Name is required")
      .isString()
      .withMessage("Name must be a string"),
    body("status")
      .trim()
      .notEmpty()
      .withMessage("Status is required")
      .isString()
      .withMessage("Status must be a string"),
    body("description")
      .optional()
      .trim()
      .isString()
      .withMessage("Description must be a string")
      .escape((value) => sanitizeText(value)),
  ],
  async (req, res, next) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      const { name, status, description } = req.body;

      const newTodo = new Todo({
        name,
        status,
        description,
      });

      const result = await newTodo.save();
      res.status(201).json(result);
    } catch (error) {
      next(error);
    }
  }
);

// GET all todos
router.get("/", async (req, res, next) => {
  try {
    const todos = await Todo.find();
    res.json(todos);
  } catch (error) {
    next(error);
  }
});

// GET a single todo by ID
router.get("/:id", async (req, res, next) => {
  try {
    const todo = await Todo.findById(req.params.id);
    if (todo) {
      res.json(todo);
    } else {
      res.status(404).json({ error: "Todo not found" });
    }
  } catch (error) {
    next(error);
  }
});

// PUT (update) a todo by ID
router.put(
  "/:id",
  [
    body("name")
      .optional()
      .trim()
      .isString()
      .withMessage("Name must be a string"),
    body("status")
      .optional()
      .trim()
      .isString()
      .withMessage("Status must be a string"),
    body("description")
      .optional()
      .trim()
      .isString()
      .withMessage("Description must be a string")
      .escape((value) => sanitizeText(value)),
  ],
  async (req, res, next) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      const { name, status, description } = req.body;

      const updatedTodo = await Todo.findByIdAndUpdate(
        req.params.id,
        { name, status, description },
        { new: true }
      );

      if (updatedTodo) {
        res.json(updatedTodo);
      } else {
        res.status(404).json({ error: "Todo not found" });
      }
    } catch (error) {
      next(error);
    }
  }
);

// DELETE a todo by ID
router.delete("/:id", async (req, res, next) => {
  try {
    const result = await Todo.findByIdAndDelete(req.params.id);
    if (result) {
      res.json({ message: "Todo deleted successfully" });
    } else {
      res.status(404).json({ error: "Todo not found" });
    }
  } catch (error) {
    next(error);
  }
});

module.exports = router;
