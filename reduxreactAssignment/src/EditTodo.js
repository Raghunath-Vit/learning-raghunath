
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { editAction } from "./actions/todoactions";
import './App.css';

const EditTodo = () => {
    const { index } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const todos = useSelector((state) => state.todos.todos);

    const [formValues, setFormValues] = useState({ name: '', status: 'complete' });

    useEffect(() => {
        const todo = todos[parseInt(index)];
        if (todo) {
            setFormValues(todo);
        }
    }, [index, todos]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const updatedTodo = {
            name: formValues.name,
            status: formValues.status,
        };
        dispatch(editAction(parseInt(index), updatedTodo));
        navigate('/');
    };

    return (
        <div className="container">
            <h2>Edit Todo</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={formValues.name}
                    onChange={(e) => setFormValues({ ...formValues, name: e.target.value })}
                    placeholder="Todo name"
                    required
                />
                <select
                    value={formValues.status}
                    onChange={(e) => setFormValues({ ...formValues, status: e.target.value })}
                >
                    <option value="complete">Complete</option>
                    <option value="incomplete">Incomplete</option>
                </select>
                <button type="submit">Update Todo</button>
            </form>
        </div>
    );
};

export default EditTodo;
