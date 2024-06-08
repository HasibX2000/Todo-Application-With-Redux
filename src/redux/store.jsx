import { configureStore } from "@reduxjs/toolkit";
import todosReducer from "./todo/reducer";
import filtersReducer from "./filter/reducer";
import fetchTodos from "./todo/thunk/fetchtodos";

const store = configureStore({
  reducer: {
    todos: todosReducer,
    filters: filtersReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: fetchTodos,
      },
    }),
});

export default store;
