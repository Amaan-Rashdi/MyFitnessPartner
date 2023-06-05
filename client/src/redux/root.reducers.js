import { combineReducers } from "redux";
import { loadingReducer } from "./loading/loading.reducers.js";
import { userReducer } from "./user/user.reducers.js";
import { themesReducer } from "./theme/theme.reducers.js";
import { trainerReducer } from "./trainers/trainers.reducers.js";
import { allGymsReducer } from "./gyms/gyms.reducers.js";
// import storage from "redux-persist/lib/storage";
// import { LOGOUT } from "./user/user.actionTypes.js";

export const rootReducer = combineReducers({
  user: userReducer,
  trainer: trainerReducer,
  loading: loadingReducer,
  theme: themesReducer,
  gyms: allGymsReducer,
  //Here will be other reducers
});

// export const rootReducer = (state, action) => {
//   if (action.type === LOGOUT) {
//     // for all keys defined in your persistConfig(s)
//     storage.removeItem("persist:root");
//     // storage.removeItem('persist:otherKey')

//     return appReducer(undefined, action);
//   }
//   return appReducer(state, action);
// };
