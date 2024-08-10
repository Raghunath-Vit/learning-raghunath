const initialState={
    todos:[
        {name:"Default Todods 1",status:"complete"},
        {name:"Default Todos 2",status:"incomplete"},
    ],
};
const TodoReducer=(state=initialState,action)=>
{
    if(action.type==="ADD")
    {
        let newTodos=[...state.todos, action.todo];
        let newState={...state,todos:newTodos};
        return newState;
    }
    if(action.type==="DELETE")
    {
        return { ...state, todos: state.todos.filter((_, index) => index !== action.id) };
    }
    if(action.type==="DELETEALL")
    {
        return { ...state, todos: [] };
    }
    if(action.type==="EDITTODO")
    {
        return {
            ...state,
            todos: state.todos.map((todo, index) =>index === action.index ? { ...todo, ...action.todo } : todo)
        }
    }
    return state;
}
  
export default TodoReducer;