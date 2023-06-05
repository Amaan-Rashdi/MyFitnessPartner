import axios from "axios";
import { APIURL } from "../../../config";

export function getAllTrainersApi() {
  return axios.get(APIURL + `/trainers`);
}

export function getTrainerApi(id) {
  return axios.get(APIURL + `/trainers/${id}`);
}


export function getTraineridbyemail(email) {
  return axios.get(APIURL + `/trainersemail/${email}`);
}


export function createTrainerApi(payload) {
  return axios.post(APIURL + `/trainer`, payload);
}

export function deleteTrainerApi(id) {
  return axios.delete(APIURL + `/trainers/${id}`);
}
export function getTrainerProfilesByIdApi(trainerid) {
  return axios.get(APIURL + `/trainer-profiles/${trainerid}`);
}

export function getAllTrainersProfilesApi() {
  return axios.get(APIURL + `/trainer-profiles`);
}

export function createTrainerProfileApi(payload) {
  return axios.post(APIURL + `/trainer-profile`, payload);
}

export function getAllTrainersGymsApi(trainerid) {
  return axios.get(APIURL + `/trainer/gyms/${trainerid}`);
}

export function getAllTrainersStudentsAPi(trainerid) {
  return axios.get(APIURL + `/trainer/students/${trainerid}`);
}

export function getTrainerWithGym(gymname) {
  return axios.get(APIURL + `/trainergym/${gymname}`)
}