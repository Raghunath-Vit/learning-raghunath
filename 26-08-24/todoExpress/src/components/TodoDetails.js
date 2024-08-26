import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';

const TodoDetails = () => {
    const [todoData, setTodoData] = useState({});
    const { id } = useParams();

    useEffect(() => {
        axios.get(`/todos/${id}`).then(response => {
            setTodoData(response.data);
        });
    }, [id]);

    return (
        <div className='todoDetailDiv'>
          <h2>Todo Detail:</h2>
            <div>Title: {todoData.name}</div>
            <div>Status: {todoData.status}</div>
            <div>Description: <div dangerouslySetInnerHTML={{ __html: todoData.description || '' }} /></div>
            <div>Todo ID: {todoData._id}</div>
            <Link to="edit">Edit Todo</Link>
        </div>
    );
}

export default TodoDetails;
