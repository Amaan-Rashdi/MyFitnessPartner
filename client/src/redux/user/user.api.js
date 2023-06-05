import axios from "axios";
import { APIURL } from "../../../config";

export function getAllUsersApi() {
  return axios.get(APIURL + `/users`);
}

export function getUserApi(id) {
  return axios.get(APIURL + `/users/${id}`);
}

export function createUserApi(payload) {
  return axios.post(APIURL + `/user`, payload);
}

export function deleteUserApi(id) {
  return axios.delete(APIURL + `/users/${id}`);
}

export function getUserByTrainerApi(trainerId) {
  return axios.get(APIURL + `/usersbytrainerid/${trainerId}`);
}

export function updateUserTrainerApi(id, trainerid) {
  return axios.patch(APIURL + `/user/${id}`, { trainerid });
}

export function updateUserDataApi(id, payload) {
  return axios.patch(APIURL + `/user/data/${id}`, payload);
}

export function updateUserDietApi(id, payload) {
  return axios.patch(APIURL + `/user/diet/${id}`, payload);
}



export function updateuserwithworkout(id , payload) {
  return axios.patch(APIURL + `/user/workout/${id}`, payload);
}


export function updateUserGymApi(id, payload) {
  return axios.patch(APIURL + `/user/gym/${id}`, payload);
}

export function createPaymentApi(payload) {
  return axios.post(APIURL + `/payment-sheet`, payload);
}
