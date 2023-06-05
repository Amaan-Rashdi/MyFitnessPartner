import axios from "axios";
import { APIURL } from "../../../config";

export function getAllTasksApi() {
  return axios.get(APIURL + `/tasks`);
}

export function getTaskApi(id) {
  return axios.get(APIURL + `/tasks/${id}`);
}

export function createTaskApi(payload) {
  return axios.post(APIURL + `/task`, payload);
}

export function deleteTaskApi(id) {
  return axios.delete(APIURL + `/tasks/${id}`);
}
