import { LOADING, NOT_LOADING } from "./loading.actionTypes";

const initialState = false;

export const loadingReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOADING:
      return action.payload;
    case NOT_LOADING:
      return action.payload;

    default:
      return state;
  }
};
