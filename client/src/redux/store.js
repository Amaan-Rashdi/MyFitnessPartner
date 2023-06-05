import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { rootReducer } from "./root.reducers.js";

// Persist
// import AsyncStorage from "@react-native-async-storage/async-storage";
// import { persistStore, persistReducer } from "redux-persist";
// import storage from "redux-persist/lib/storage";

// const persistConfig = {
//   key: "root",
//   storage: AsyncStorage,
// };

// const persistedReducer = persistReducer(persistConfig, rootReducer);
// export const store = createStore(persistedReducer)

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
// const persistor = persistStore(store);

export { store };
