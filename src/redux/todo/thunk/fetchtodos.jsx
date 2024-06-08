import { loaded } from "../action";

const fetchtodos = async (dispatch) => {
  const response = await fetch("http://localhost:9000/todos");
  const todos = await response.json();

  dispatch(loaded(todos));
};

export default fetchtodos;
