import { combineReducers, configureStore } from "@reduxjs/toolkit";
import storage from 'redux-persist/lib/storage'
import counterReducer from "./slice/CounterSlice";
import { persistReducer, persistStore } from "redux-persist";
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2'

const rootReducer = combineReducers({
  counter: counterReducer,
});
const persistConfig = {
  key: 'root',
  storage,
  stateReconciler: autoMergeLevel2, // It helps in migrating store, where it shallow compares and add the updated redux state to the production.
  whitelist: [], // We whitelist the reducer to persist
  blacklist: [], // We blacklist the reducer, if we do not want reducer state to be stored in localstorage
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer
})
export const persistor = persistStore(store);