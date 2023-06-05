import axios from "axios";
import { APIURL } from "../../../config";

export function getAllAnnouncementsApi() {
  return axios.get(APIURL + `/announcements`);
}

export function getAnnouncementApi(id) {
  return axios.get(APIURL + `/announcements/${id}`);
}

export function createAnnouncementApi(payload) {
  return axios.post(APIURL + `/announcement`, payload);
}

export function deleteAnnouncementApi(id) {
  return axios.delete(APIURL + `/announcements/${id}`);
}

export function getAnnouncementsByTrainerIdApi(trainerid) {
  return axios.get(APIURL + `/trainer/announcements/${trainerid}`);
}
