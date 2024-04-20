import { configureStore } from "@reduxjs/toolkit";
import todosReducer from "./todo/reducer";
import filtersReducer from "./filter/reducer";
const store = configureStore({
  reducer: {
    todos: todosReducer,
    filters: filtersReducer,
  },
});

export default store;
