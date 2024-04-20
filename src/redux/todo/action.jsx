import {
  ADD_TODO,
  TOGGLE_TODO,
  DELETE_TODO,
  COMPLETE_ALL,
  COMPLETE_CLEAR,
  COLOR_TODO,
} from "./actionTypes";

export const addTodo = (todoText) => {
  return {
    type: ADD_TODO,
    payload: todoText,
  };
};

export const deleteTodo = (todoId) => {
  return {
    type: DELETE_TODO,
    payload: todoId,
  };
};

export const colorSelected = (todoId, color) => {
  return {
    type: COLOR_TODO,
    payload: {
      todoId,
      color,
    },
  };
};

export const toggleTodo = (todoId) => {
  return {
    type: TOGGLE_TODO,
    payload: todoId,
  };
};

export const completeAll = () => {
  return {
    type: COMPLETE_ALL,
  };
};

export const completeClear = () => {
  return {
    type: COMPLETE_CLEAR,
  };
};
