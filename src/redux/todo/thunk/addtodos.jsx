import { addTodo } from "../action";

const addtodos = (todoText) => {
  return async (dispatch) => {
    const response = await fetch("http://localhost:9000/todos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify({
        text: todoText,
        completed: false,
      }),
    });
    const todo = await response.json();

    dispatch(addTodo(todo.text));
  };
};

export default addtodos;
