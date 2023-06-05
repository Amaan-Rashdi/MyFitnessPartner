// import { loginAction, logoutAction } from "./user/user.actions.js";
// import ToastManager, { Toast as toast } from "toastify-react-native";

// export const APIURL = `${process.env.API_URL}/api`;

// export default function setupAxios(axios, store) {
//   //Axios Request
//   axios.interceptors.request.use(
//     (config) => {
//       config.headers.Authorization = `Bearer ${store.getState().user.token}`;

//       return config;
//     },
//     (err) => Promise.reject(err)
//   );

//   //Axios Response
//   axios.interceptors.response.use(
//     (response) => {
//       return {
//         ...response.data,
//         apiStatus: response.status,
//       };
//     },
//     function (error) {
//       const message = error.response?.data?.message;

//       if (error.response.status === 401) {
//         toast.error("Session Expired ! Please login again.");
//         store.dispatch(logoutAction());
//       } else if (error.response.status === 404) {
//       } else if (error.response.status === 409) {
//       } else {
//         toast.error(message || "Something Went Wrong! Please try again");
//       }
//       return Promise.reject(error);
//     }
//   );
// }
