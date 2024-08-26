import { useState, useEffect, useCallback } from "react";
import axios from "axios";
import TodoForms from "./TodoForms";
import TodoList from "./TodoList";

function Todo() {
    const [todos, setTodos] = useState([]);
    const [todoEntered, setTodoEntered] = useState({ name: "", description: "" });
    const [statusEntered, setStatusEntered] = useState("completed");

    useEffect(() => {
        getTodos();
    }, []);

    function getTodos() {
        axios.get("/todos")
            .then(response => {
                setTodos(response.data);
            })
            .catch(error => {
                console.error(error);
            });
    }

    function changeTodoEntered(e, field) {
        setTodoEntered(prev => ({
            ...prev,
            [field]: e.target.value
        }));
    }

    const addTodo = useCallback(() => {
        const newTodoObject = {
            name: todoEntered.name,
            status: statusEntered,
            description: todoEntered.description
        };
        axios.post("/todos", newTodoObject)
            .then(response => {
                if (response.status === 201) {
                    getTodos();
                    setTodoEntered({ name: "", description: "" });
                    setStatusEntered("completed");
                }
            })
            .catch(error => {
                console.error(error);
            });
    }, [todoEntered, statusEntered]);

    function deleteTodo(idToDelete) {
        axios.delete(`/todos/${idToDelete}`)
            .then(() => {
                getTodos();
            })
            .catch(error => {
                console.error(error);
            });
    }

    async function deleteAll() {
        try {
            const response = await axios.get("/todos");
            const todosToDelete = response.data;
            for (let todo of todosToDelete) {
                await axios.delete(`/todos/${todo._id}`);
            }
            setTodos([]);
        } catch (error) {
            console.error("Error resetting todos", error);
        }
    }

    return (
        <div className="out">
            <TodoForms
                todoEntered={todoEntered}
                setStatusEntered={setStatusEntered}
                changeTodoEntered={changeTodoEntered}
                addTodo={addTodo}
            />
            <TodoList todos={todos} deleteTodo={deleteTodo} />
            <button onClick={deleteAll}>Delete All</button>
        </div>
    );
}

export default Todo;
