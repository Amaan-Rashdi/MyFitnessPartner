import { LOADING, NOT_LOADING } from "./loading.actionTypes";

export const loadingAction = () => ({
  type: LOADING,
  payload: true,
});

export const notLoadingAction = () => ({
  type: NOT_LOADING,
  payload: false,
});
