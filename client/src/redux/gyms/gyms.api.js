import axios from "axios";
import { APIURL } from "../../../config";

export function getAllGymsApi() {
  return axios.get(APIURL + `/gyms`);
}

export function getHalfGymsApi() {
  return axios.get(APIURL + `/halfgym`);
}

export function getGymApi(id) {
  return axios.get(APIURL + `/gyms/${id}`);
}

export function getRegisteredGymsApi() {
  return axios.get(APIURL + `/registeredgyms`);
}

export function createGymApi(payload) {
  return axios.post(APIURL + `/gym`, payload);
}

export function deleteGymApi(id) {
  return axios.delete(APIURL + `/gyms/${id}`);
}

export function updateGymTrainerApi(id, trainerid) {
  return axios.patch(APIURL + `/gym/${id}`, { trainerid });
}
