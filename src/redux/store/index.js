import { combineReducers, configureStore } from "@reduxjs/toolkit";
import jobReducer from "../reducers/JobSearch";
import mainReducer from "../reducers";
import localStorage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import { encryptTransform } from "redux-persist-transform-encrypt";

const persistConfig = {
  key: "root", // ???
  storage: localStorage, // the default engine
  transforms: [
    encryptTransform({
      secretKey: "lion0147",
    }),
  ],
};
const finalReducer = combineReducers({
  jobs: jobReducer,
  favorite: mainReducer,
});
const persistedReducer = persistReducer(persistConfig, finalReducer);
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
