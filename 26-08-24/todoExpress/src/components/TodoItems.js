import React from 'react';
import { Link } from 'react-router-dom';

function TodoItems({ val, deleteTodo }) {
    return (
        <div className='items-div'>
            <span className='items-div-p'>{val.name}</span>
            <button  onClick={() => deleteTodo(val._id)}>Delete</button>
            <Link to={`${val._id}`}>View Todo</Link>
            <br />
        </div>
    );
}

export default TodoItems;
