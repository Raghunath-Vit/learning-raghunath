import TodoItems from "./TodoItems";
function TodoList({ todos, deleteTodo }) {
    return (
      <>
      <div className="listDiv">
        <h2>Todos List</h2>
        {todos.map((val) => (
          <TodoItems key={val._id} val={val} deleteTodo={deleteTodo} />
        ))}
      </div>
      </>
    );
  }
  export default TodoList;