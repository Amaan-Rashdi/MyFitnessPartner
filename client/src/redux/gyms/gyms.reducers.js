import { LOAD_ALL_GYMS } from "./gyms.actionTypes";

const initialState = [];

export const allGymsReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_ALL_GYMS:
      return action.payload;

    default:
      return state;
  }
};
