import axios from "axios";
import { APIURL } from "../../../config";

export function loginApi(payload) {
  return axios.post(APIURL + `/login`, payload);
}

export function userLoginApi(payload) {
  return axios.post(APIURL + `/user/login`, payload);
}

export function trainerLoginApi(payload) {
  return axios.post(APIURL + `/trainer/login`, payload);
}
