import {
  LOGIN,
  UPDATE_USER,
  LOGOUT,
  GYM_SUBSCRIPTION,
} from "./user.actionTypes.js";

const initialState = {
  currentUser: null,
  token: null,
  userType: null,
  gymSubcription: null,
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        currentUser: action.payload.user,
        userType: action.payload.user_type,
        token: action.payload.token,
      };
    case UPDATE_USER:
      return {
        ...state,
        currentUser: action.payload,
      };

    case GYM_SUBSCRIPTION:
      return {
        ...state,
        gymSubcription: action.payload,
      };
    case LOGOUT:
      return {
        currentUser: null,
        token: null,
        userType: null,
      };
    default:
      return state;
  }
};
