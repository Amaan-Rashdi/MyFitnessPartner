import {
  LOGIN,
  UPDATE_USER,
  LOGOUT,
  GYM_SUBSCRIPTION,
} from "./user.actionTypes.js";

export const loginAction = (payload) => ({
  type: LOGIN,
  payload,
});

export const updateUserAction = (payload) => ({
  type: UPDATE_USER,
  payload,
});

export const gymSubscriptionAction = (payload) => ({
  type: GYM_SUBSCRIPTION,
  payload,
});

export const logoutAction = () => ({
  type: LOGOUT,
});
