// const express = require('express');
// const { body, validationResult } = require('express-validator');
// const Todo = require('../models/todo');
// const router = express.Router();



// // GET all todos
// router.get('/', async (req, res) => {
//   try {
//     const todos = await Todo.find();
//     res.json(todos);
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// });

// // GET a single todo by ID
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

// // POST a new todo
// router.post(
//   '/',
//   [
//     body('name').isString().notEmpty(),
//     body('status').isIn(['completed', 'incomplete']),
//     body('description').isEmpty().withMessage("No Empty Description").escape()
//     // body('description').optional().isString().customSanitizer(sanitizeInput)
    
//   ],
//   async (req, res) => {
//     const errors = validationResult(req);
//     if (!errors.isEmpty()) {
//       return res.status(400).json({ errors: errors.array() });
//     }

//     const todo = new Todo({
//       name: req.body.name,
//       status: req.body.status,
//       description: req.body.description
//     });

//     try {
//       const newTodo = await todo.save();
//       res.status(201).json(newTodo);
//     } catch (err) {
//       res.status(400).json({ message: err.message });
//     }
//   }
// );

// // DELETE a todo by ID
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

// // PUT (update) a todo by ID
// router.put(
//   '/:id',
//   [
//     body('name').optional().isString(),
//     body('status').optional().isIn(['completed', 'incomplete']),
//     body('description').isEmpty().withMessage("Description not empty").escape()
//     // body('description').optional().isString().customSanitizer(sanitizeInput)
//   ],
//   async (req, res) => {
//     const errors = validationResult(req);
//     if (!errors.isEmpty()) {
//       return res.status(400).json({ errors: errors.array() });
//     }

//     try {
//       const todo = await Todo.findById(req.params.id);
//       if (todo == null) {
//         return res.status(404).json({ message: 'Cannot find todo' });
//       }

//       todo.name = req.body.name || todo.name;
//       todo.status = req.body.status || todo.status;
//       todo.description = req.body.description || todo.description;

//       const updatedTodo = await todo.save();
//       res.json(updatedTodo);
//     } catch (err) {
//       res.status(400).json({ message: err.message });
//     }
//   }
// );

// module.exports = router;






















// const express = require('express');
// const router = express.Router();
// const Todo = require('../models/todo');
// const { body, validationResult } = require('express-validator');




//   router.post(
//     '/',
//     [
//       body('name')
//         .trim()
//         .notEmpty().withMessage('Name is required')
//         .isString().withMessage('Name must be a string'),
//       body('status')
//         .trim()
//         .notEmpty().withMessage('Status is required')
//         .isString().withMessage('Status must be a string'),
//       body('description')
//         .optional()
//         .trim()
//         .isString().withMessage('Description must be a string'),
//         // .escape(value => sanitizeText(value)), 
//     ],
//     async (req, res, next) => {
//       try {
//         const errors = validationResult(req);
//         if (!errors.isEmpty()) {
//           return res.status(400).json({ errors: errors.array() });
//         }
  
//         const { name, status, description } = req.body;
  
//         const newTodo = new Todo({
//           name,
//           status,
//           description,
//         });
  
//         const result = await newTodo.save();
//         res.json(result);
//       } catch (error) {
//         next(error);
//       }
//     }
//   );


// router.get('/', async (req, res, next) => {
//     try {
//         let todos = await Todo.find();
//         res.json(todos);
//     } catch (error) {
//         next(error);
//     }
// });

// router.get('/:id', async (req, res, next) => {
//     try {
//         let todo = await Todo.findById(req.params.id);
//         if (todo) {
//             res.json(todo);
//         } else {
//             res.status(404).json({ error: 'Todo not found' });
//         }
//     } catch (error) {
//         next(error);
//     }
// });

// router.put('/:id', [
//     body('name')
//       .optional()
//       .trim()
//       .isString().withMessage('Name must be a string'),
//     body('status')
//       .optional()
//       .trim()
//       .isString().withMessage('Status must be a string'),
//     body('description')
//       .optional()
//       .trim()
//       .isString().withMessage('Description must be a string'),
//       // .escape(value => sanitizeText(value)), 
//   ], async (req, res, next) => {
//     try {
//       const errors = validationResult(req);
//       if (!errors.isEmpty()) {
//         return res.status(400).json({ errors: errors.array() });
//       }
  
//       let { name, status, description } = req.body;
//       let updatedTodo = await Todo.findByIdAndUpdate(
//         req.params.id,
//         { name, status, description },
//         { new: true }
//       );
//       if (updatedTodo) {
//         res.json(updatedTodo);
//       } else {
//         res.status(404).json({ error: 'Todo not found' });
//       }
//     } catch (error) {
//       next(error);
//     }
//   });

// router.delete('/:id', async (req, res, next) => {
//     try {
//         let result = await Todo.findByIdAndDelete(req.params.id);
//         if (result) {
//             res.json(result);
//         } else {
//             res.status(404).json({ error: 'Todo not found' });
//         }
//     } catch (error) {
//         next(error);
//     }
// });

// module.exports = router;





























const express = require('express');
const { body, validationResult } = require('express-validator');
const Todo = require('../models/todo');
const router = express.Router();

// POST a new todo
router.post(
  '/',
  [
    body('name')
      .trim()
      .notEmpty().withMessage('Name is required')
      .isString().withMessage('Name must be a string'),
    body('status')
      .trim()
      .notEmpty().withMessage('Status is required')
      .isString().withMessage('Status must be a string'),
    body('description')
      .optional()
      .trim()
      .isString().withMessage('Description must be a string')
     .escape(value => sanitizeText(value)), // Uncomment if you need custom sanitization
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
router.get('/', async (req, res, next) => {
  try {
    const todos = await Todo.find();
    res.json(todos);
  } catch (error) {
    next(error);
  }
});

// GET a single todo by ID
router.get('/:id', async (req, res, next) => {
  try {
    const todo = await Todo.findById(req.params.id);
    if (todo) {
      res.json(todo);
    } else {
      res.status(404).json({ error: 'Todo not found' });
    }
  } catch (error) {
    next(error);
  }
});

// PUT (update) a todo by ID
router.put(
  '/:id',
  [
    body('name')
      .optional()
      .trim()
      .isString().withMessage('Name must be a string'),
    body('status')
      .optional()
      .trim()
      .isString().withMessage('Status must be a string'),
    body('description')
      .optional()
      .trim()
      .isString().withMessage('Description must be a string')
     .escape(value => sanitizeText(value)), // Uncomment if you need custom sanitization
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
        res.status(404).json({ error: 'Todo not found' });
      }
    } catch (error) {
      next(error);
    }
  }
);

// DELETE a todo by ID
router.delete('/:id', async (req, res, next) => {
  try {
    const result = await Todo.findByIdAndDelete(req.params.id);
    if (result) {
      res.json({ message: 'Todo deleted successfully' });
    } else {
      res.status(404).json({ error: 'Todo not found' });
    }
  } catch (error) {
    next(error);
  }
});

module.exports = router;
