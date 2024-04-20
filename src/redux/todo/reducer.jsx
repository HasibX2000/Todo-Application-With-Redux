import initialState from "./initialState";
import {
  ADD_TODO,
  DELETE_TODO,
  TOGGLE_TODO,
  COLOR_TODO,
  COMPLETE_ALL,
  COMPLETE_CLEAR,
} from "./actionTypes";

const nextTodoId = (todos) => {
  const maxId = todos.reduce((maxId, todo) => Math.max(maxId, todo.id), -1);
  return maxId + 1;
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          id: nextTodoId(state),
        },
      ];
    case TOGGLE_TODO:
      return state.map((todo) => {
        if (todo.id === action.payload) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      });
    case COLOR_TODO:
      const { todoId, color } = action.payload;
      return state.map((todo) => {
        if (todo.id === todoId) {
          return {
            ...todo,
            color,
          };
        }
        return todo;
      });

    case DELETE_TODO:
      return state.filter((todo) => todo.id !== action.payload);

    case COMPLETE_ALL:
      return state.map((todo) => ({
        ...todo,
        completed: true,
      }));

    case COMPLETE_CLEAR:
      return state.filter((todo) => !todo.completed);

    default:
      return state;
  }
};

export default reducer;
