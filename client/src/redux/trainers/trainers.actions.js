import {
  LOAD_GYMS,
  LOAD_STUDENTS,
  LOAD_ANNOUNCEMENTS,
  SELECTED_STUDENT,
} from "./trainers.actionTypes";

export const trainerLoadGymsAction = (data) => ({
  type: LOAD_GYMS,
  payload: data,
});

export const trainerLoadStudentsAction = (data) => ({
  type: LOAD_STUDENTS,
  payload: data,
});

export const trainerLoadAnnouncementsAction = (data) => ({
  type: LOAD_ANNOUNCEMENTS,
  payload: data,
});

export const trainerSelectedStudentAction = (data) => ({
  type: SELECTED_STUDENT,
  payload: data,
});
