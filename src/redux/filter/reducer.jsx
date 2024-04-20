import initialState from "./initialState";
import { TOGGLE_STATUS, TOGGLE_COLOR } from "./actionTypes";

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_STATUS:
      return {
        ...state,
        status: action.payload,
      };
    case TOGGLE_COLOR:
      const { color, changeType } = action.payload;
      switch (changeType) {
        case "added":
          return {
            ...state,
            colors: [...state.colors, color],
          };
        case "removed":
          return {
            ...state,
            colors: state.colors.filter((c) => c !== color),
          };
        default:
      }
    default:
      return state;
  }
};

export default reducer;
