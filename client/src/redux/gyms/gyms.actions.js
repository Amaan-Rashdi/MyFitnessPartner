import { LOAD_ALL_GYMS } from "./gyms.actionTypes";

export const loadAllGymsAction = (data) => ({
  type: LOAD_ALL_GYMS,
  payload: data,
});
