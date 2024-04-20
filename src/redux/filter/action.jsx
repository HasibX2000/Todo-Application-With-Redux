import { TOGGLE_STATUS, TOGGLE_COLOR } from "./actionTypes";

export const toggleColor = (color, changeType) => {
  return {
    type: TOGGLE_COLOR,
    payload: {
      color,
      changeType,
    },
  };
};
export const toggleStatus = (statusType) => {
  return {
    type: TOGGLE_STATUS,
    payload: {
      statusType,
    },
  };
};
