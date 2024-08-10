
const addAction = (todo) => ({ type: "ADD", todo });
const deleteAction = (id) => ({ type: "DELETE", id });
const editAction = (index, todo) => ({ type: "EDITTODO", index, todo });
const deleteAllAction = () => ({ type: "DELETEALL" });

export { addAction, deleteAction, editAction, deleteAllAction };
