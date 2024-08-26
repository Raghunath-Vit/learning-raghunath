// let express = require("express");
// const path = require("path");
// const socketIo = require("socket.io");
// const http = require("http");


// let app = express();
// var router = express.Router();

// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());
// const server = http.createServer(app);

// const io = socketIo(server, { cors: { origin: "*" } });
// let interval;
// io.on("connection", (socket) => {
// 	console.log("new socket connection");
// 	if (interval) {
// 		clearInterval();
// 	}
// 	interval = setInterval(() => {
// 		const response = new Date();
// 		socket.emit("GetTime", response);
// 	}, 1500);
// 	socket.on("disconnect", () => {
// 		console.log("client disconnected");
// 		clearInterval(interval);
// 	});
// });

// let todos = [
// 	{ name: "read book", status: "complete" },
// 	{ name: "go to gym", status: "incomplete" },
// ];

// router.get("/", function (request, response) {
// 	response.json(todos);
// });
// //:id means id can have any value. so it is variable.
// router.get("/:id", function (request, response) {
// 	let id = request.params.id;
// 	response.json(todos[id]);
// });
// router.post("/", function (request, response) {
// 	console.log(request.body);
// 	let { name, status } = request.body;
// 	let todosOb = { name: name, status: status };
// 	todos.push(todosOb);
// 	response.json({ status: 1, msg: "operation to add todo is complete" });
// });

// router.get("/todoform", function (request, response) {
// 	let completePath = path.join(__dirname + "/todoform.html");
// 	response.sendFile(completePath);
// });
// app.delete("/:id", function (request, response) {
// 	console.log("came in delete function ");
// 	let newTodos = todos.filter((val, index) => {
// 		if (index == request.params.id) return false;
// 		return true;
// 	});
// 	todos = [...newTodos];
// 	response.json({
// 		status: 1,
// 		msg: "Todo item with id ${request.params.id} is deleted",
// 	});
// });

















// routes/todosapi.js
// const express = require('express');
// const router = express.Router();
// const Todo = require('../models/todo');

// router.get('/', async (req, res) => {
//   try {
//     const todos = await Todo.find();
//     res.json(todos);
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// });

// router.get('/:id', async (req, res) => {
//   try {
//     const todo = await Todo.findById(req.params.id);
//     if (todo == null) {
//       return res.status(404).json({ message: 'Cannot find todo' });
//     }
//     res.json(todo);
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// });

// router.post('/', async (req, res) => {
//   const todo = new Todo({
//     name: req.body.name,
//     status: req.body.status
//   });
  
//   try {
//     const newTodo = await todo.save();
//     res.status(201).json(newTodo);
//   } catch (err) {
//     res.status(400).json({ message: err.message });
//   }
// });

// router.delete('/:id', async (req, res) => {
//   try {
//     const todo = await Todo.findById(req.params.id);
//     if (todo == null) {
//       return res.status(404).json({ message: 'Cannot find todo' });
//     }
//     await Todo.findByIdAndDelete(req.params.id);
//     res.json({ message: 'Todo deleted' });
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// });

// router.put('/:id', async (req, res) => {
//   try {
//     const todo = await Todo.findById(req.params.id);
//     if (todo == null) {
//       return res.status(404).json({ message: 'Cannot find todo' });
//     }

//     todo.name = req.body.name || todo.name;
//     todo.status = req.body.status || todo.status;

//     const updatedTodo = await todo.save();
//     res.json(updatedTodo);
//   } catch (err) {
//     res.status(400).json({ message: err.message });
//   }
// });

// module.exports = router;















const express = require('express');
const { body, validationResult } = require('express-validator');
const sanitizeHtml = require('sanitize-html');
const Todo = require('../models/todo');
const router = express.Router();

// Helper function to sanitize HTML
function sanitizeInput(input) {
  return sanitizeHtml(input, {
    allowedTags: [], // Customize this as needed
    allowedAttributes: {}
  });
}

// GET all todos
router.get('/', async (req, res) => {
  try {
    const todos = await Todo.find();
    res.json(todos);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// GET a single todo by ID
router.get('/:id', async (req, res) => {
  try {
    const todo = await Todo.findById(req.params.id);
    if (todo == null) {
      return res.status(404).json({ message: 'Cannot find todo' });
    }
    res.json(todo);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST a new todo
router.post(
  '/',
  [
    body('name').isString().notEmpty(),
    body('status').isIn(['completed', 'incomplete']),
    body('description').optional().isString().customSanitizer(sanitizeInput)
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const todo = new Todo({
      name: req.body.name,
      status: req.body.status,
      description: req.body.description
    });

    try {
      const newTodo = await todo.save();
      res.status(201).json(newTodo);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  }
);

// DELETE a todo by ID
router.delete('/:id', async (req, res) => {
  try {
    const todo = await Todo.findById(req.params.id);
    if (todo == null) {
      return res.status(404).json({ message: 'Cannot find todo' });
    }
    await Todo.findByIdAndDelete(req.params.id);
    res.json({ message: 'Todo deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// PUT (update) a todo by ID
router.put(
  '/:id',
  [
    body('name').optional().isString(),
    body('status').optional().isIn(['completed', 'incomplete']),
    body('description').optional().isString().customSanitizer(sanitizeInput)
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const todo = await Todo.findById(req.params.id);
      if (todo == null) {
        return res.status(404).json({ message: 'Cannot find todo' });
      }

      todo.name = req.body.name || todo.name;
      todo.status = req.body.status || todo.status;
      todo.description = req.body.description || todo.description;

      const updatedTodo = await todo.save();
      res.json(updatedTodo);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  }
);

module.exports = router;
