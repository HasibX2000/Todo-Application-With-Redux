import { deleteTodo } from "../action";

const deletetodos = (todoId) => {
  return async (dispatch) => {
    const response = await fetch(`http://localhost:9000/todos/${todoId}`, {
      method: "DELETE",
    });

    dispatch(deleteTodo(todoId));
  };
};

export default deletetodos;
