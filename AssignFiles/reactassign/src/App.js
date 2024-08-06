import React from "react";
import './App.css';

export default function App() {
  const [todos, setTodos] = React.useState(["item 1", "item 2", "item 3"]);

  return (
    <div className="container">
      <TodoCount todos={todos} />
      <TodoList todos={todos} />
      <AddTodo setTodos={setTodos} />
    </div>
  );
}

function TodoCount({ todos }) {
  return <div className="todo-count">Total Todos: {todos.length}</div>;
}

function TodoList({ todos }) {
  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <li key={todo}>{todo}</li>
      ))}
    </ul>
  );
}

function AddTodo({ setTodos }) {
  function handleSubmit(event) {
    event.preventDefault();
    const todo = event.target.elements.todo.value;
    setTodos((prevTodos) => [...prevTodos, todo]);
    event.target.reset(); // Clear the input after adding
  }

  return (
    <form onSubmit={handleSubmit} className="add-todo">
      <input type="text" id="todo" placeholder="Enter new todo" />
      <button type="submit">Add Todo</button>
    </form>
  );
}
