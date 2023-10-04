import { combineReducers, configureStore } from "@reduxjs/toolkit";
import toolkitSlice from "./toolkitSlice";
//import { fetchMessages } from "./toolkitSlice";

const rootReducer = combineReducers({
  toolkit: toolkitSlice,
});

export const store = configureStore({
  reducer: rootReducer,
});
//store.dispatch(fetchMessages());
