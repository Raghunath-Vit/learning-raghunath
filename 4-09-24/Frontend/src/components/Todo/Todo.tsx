import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Todo.css';

interface Todo {
  name: string;
  status: string;
}

const Todo: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTodo, setNewTodo] = useState<string>('');
  const [status, setStatus] = useState<string>('incomplete');

  useEffect(() => {
    axios.get<Todo[]>('http://localhost:3001/todos')
      .then(response => setTodos(response.data))
      .catch(error => console.error('Error fetching todos:', error));
  }, []);

  const addTodo = () => {
    axios.post('http://localhost:3001/todos', { name: newTodo, status })
      .then(response => {
        if (response.data.status === 1) {
          setTodos([...todos, { name: newTodo, status }]);
          setNewTodo('');
          setStatus('incomplete');
        }
      })
      .catch(error => console.error('Error adding todo:', error));
  };

  const deleteTodo = (index: number) => {
    axios.delete(`http://localhost:3001/todos/${index}`)
      .then(() => {
        setTodos(todos.filter((_, i) => i !== index));
      })
      .catch(error => console.error('Error deleting todo:', error));
  };

  return (
    <div className="todo-container">
      <h1 className="todo-heading">Todo List</h1>
      <div className="todo-form">
        <input
          type="text"
          className="todo-input"
          placeholder="Enter a new todo..."
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <select 
          className="todo-select" 
          value={status} 
          onChange={(e) => setStatus(e.target.value)}
        >
          <option value="incomplete">Incomplete</option>
          <option value="complete">Complete</option>
        </select>
        <button 
          className="todo-button" 
          onClick={addTodo}
          disabled={!newTodo.trim()}
        >
          Add Todo
        </button>
      </div>
      <ul className="todo-list">
        {todos.length > 0 ? (
          todos.map((todo, index) => (
            <li key={index} className="todo-item-container">
              <div className="todo-item-content">
                <span className={`todo-item ${todo.status}`}>
                  {todo.name} - {todo.status}
                </span>
              </div>
              <button 
                className="todo-delete-button"
                onClick={() => deleteTodo(index)}
              >
                Delete
              </button>
            </li>
          ))
        ) : (
          <p className="todo-empty">No todos found.</p>
        )}
      </ul>
    </div>
  );
};

export default Todo;
