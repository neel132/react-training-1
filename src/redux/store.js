import { combineReducers, configureStore } from "@reduxjs/toolkit";
import storage from 'redux-persist/lib/storage'
import counterReducer from "./slice/CounterSlice";
import { persistReducer, persistStore } from "redux-persist";

const rootReducer = combineReducers({
  counter: counterReducer,
});
const persistConfig = {
  key: 'root',
  storage
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer
})
export const persistor = persistStore(store);