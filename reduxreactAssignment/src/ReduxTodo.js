
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addAction, deleteAction, editAction, deleteAllAction } from "./actions/todoactions";
import { Link } from "react-router-dom";
import './App.css';

const ReduxTodo = () => {
    const dispatch = useDispatch();
    const todos = useSelector((state) => state.todos.todos);

    const [formValues, setFormValues] = useState({ name: '', status: 'complete' });
    const [isEditing, setIsEditing] = useState(false);
    const [editIndex, setEditIndex] = useState(null);

    const addTodo = (e) => {
        e.preventDefault();
        const todo = {
            name: e.target.name.value,
            status: e.target.status.value,
        };
        dispatch(addAction(todo));
        e.target.reset();
    };

    const deleteTodo = (index) => {
        dispatch(deleteAction(index));
    };

    const deleteAllTodos = () => {
        dispatch(deleteAllAction());
    };

    return (
        <div className="container">
            <form onSubmit={isEditing ? (e) => {
                e.preventDefault();
                const updatedTodo = { name: formValues.name, status: formValues.status };
                dispatch(editAction(editIndex, updatedTodo));
                setIsEditing(false);
                setEditIndex(null);
                setFormValues({ name: '', status: 'complete' });
            } : addTodo}>
                <input
                    type="text"
                    name="name"
                    value={formValues.name}
                    onChange={(e) => setFormValues({ ...formValues, name: e.target.value })}
                    placeholder="Todo name"
                    required
                />
                <select
                    name="status"
                    value={formValues.status}
                    onChange={(e) => setFormValues({ ...formValues, status: e.target.value })}
                >
                    <option value="complete">Complete</option>
                    <option value="incomplete">Incomplete</option>
                </select>
                <button type="submit">{isEditing ? "Update Todo" : "Add Todo"}</button>
            </form>
            <button onClick={deleteAllTodos}>Delete All Todos</button>
            {todos.map((val, index) => (
                <div key={index} className="todo-item">
                    <div>Name: {val.name}</div>
                    <div>Status: {val.status}</div>
                    <Link to={`/edit/${index}`} className="edit-link">Edit</Link>
                    <button onClick={() => deleteTodo(index)}>Delete Todo</button>
                </div>
            ))}
        </div>
    );
};

export default ReduxTodo;
