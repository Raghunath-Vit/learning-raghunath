
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const TodoDetailsEdit = () => {
    const [todoData, setTodoData] = useState({});
    const options = [{ title: "completed" }, { title: "incomplete" }];
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`/todos/${id}`).then(response => {
            setTodoData(response.data);
        });
    }, [id]);

    const editTodo = async (e) => {
        e.preventDefault();
        const todoModifiedOb = {
            name: e.target.todoitem.value,
            status: e.target.status.value,
            description: e.target.description.value
        };

        try {
            await axios.put(`/todos/${id}`, todoModifiedOb);
            navigate('/todo');
        } catch (error) {
            console.error('Error updating todo:', error);
        }
    };

    return (
        <>
        <div className='editTodoDiv'>
            <form onSubmit={editTodo}>
                <input
                    type='text'
                    name="todoitem"
                    value={todoData.name || ''}
                    onChange={(e) => setTodoData({ ...todoData, name: e.target.value })}
                />
                <textarea
                    name='description'
                    value={todoData.description || ''}
                    onChange={(e) => setTodoData({ ...todoData, description: e.target.value })}
                />
                <select
                    name='status'
                    value={todoData.status || ''}
                    onChange={(e) => setTodoData({ ...todoData, status: e.target.value })}
                >
                    {options.map(val => (
                        <option key={val.title} value={val.title}>
                            {val.title}
                        </option>
                    ))}
                </select>
                <button type="submit">Edit Todo</button>
            </form>
            </div>
        </>
    );
};

export default TodoDetailsEdit;
