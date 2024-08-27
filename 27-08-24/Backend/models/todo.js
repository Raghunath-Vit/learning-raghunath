// models/todo.js
// const mongoose = require('mongoose');

// const todoSchema = new mongoose.Schema({
//   name: { type: String, required: true },
//   status: { type: String, required: true }
// });

// module.exports = mongoose.model('Todo', todoSchema);


const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
  name: { type: String, required: true },
  status: { type: String, required: true },
  description: { type: String, required: false }
});

module.exports = mongoose.model('Todo', todoSchema);

