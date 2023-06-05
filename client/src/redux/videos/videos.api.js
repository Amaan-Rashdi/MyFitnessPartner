import axios from "axios";
import { APIURL } from "../../../config";

export function getAllVideos() {
  return axios.get(APIURL + `/videos`);
}

export function downloadVideos(filename) {
  return axios.get(APIURL + `/download/${filename}`);
}

export const downloadUrl = APIURL + `/download/`;
