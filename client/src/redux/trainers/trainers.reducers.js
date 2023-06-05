import {
  LOAD_GYMS,
  LOAD_STUDENTS,
  LOAD_ANNOUNCEMENTS,
  SELECTED_STUDENT,
} from "./trainers.actionTypes";

const initialState = {
  gyms: [],
  students: [],
  announcements: [],
  selectedStudent: {},
};

export const trainerReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_GYMS:
      return { ...state, gyms: action.payload };

    case LOAD_STUDENTS:
      return { ...state, students: action.payload };

    case LOAD_ANNOUNCEMENTS:
      return { ...state, announcements: action.payload };

    case SELECTED_STUDENT:
      return { ...state, selectedStudent: action.payload };
    default:
      return state;
  }
};
