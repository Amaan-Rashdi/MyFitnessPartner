import { DARK_THEME, LIGHT_THEME } from "./theme.actionTypes.js";

const initialState = {};

export const themesReducer = (state = initialState, action) => {
  switch (action.type) {
    case DARK_THEME:
      return action.payload;
    case LIGHT_THEME:
      return action.payload;
    default:
      return state;
  }
};
