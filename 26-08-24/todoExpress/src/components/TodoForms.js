import React from 'react';

function TodoForms({ todoEntered, setStatusEntered, setDescriptionEntered, changeTodoEntered, addTodo }) {
    return (
        <>
        <h2>Add Todos</h2>
        <div className='formsDiv'>
            <input
                type="text"
                name="todoitem"
                value={todoEntered.name}
                onChange={e => changeTodoEntered(e, 'name')}
                placeholder="Todo name"
            />
            <textarea
                name="description"
                value={todoEntered.description}
                onChange={e => changeTodoEntered(e, 'description')}
                placeholder="Description"
            />
            <select onChange={e => setStatusEntered(e.target.value)} value={todoEntered.status}>
                <option value="completed">Completed</option>
                <option value="incomplete">Not Completed</option>
            </select>
            <button onClick={addTodo}>Add Todo</button>
            </div>
        </>
    );
}

export default TodoForms;
