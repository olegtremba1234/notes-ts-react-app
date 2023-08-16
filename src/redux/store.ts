import { configureStore, combineReducers, AnyAction } from "@reduxjs/toolkit";
import { ThunkDispatch } from "redux-thunk";
import noteReducer from "./notes/noteSlice";

const rootReducer = combineReducers({
  notes: noteReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export type AppDispatch = ThunkDispatch<RootState, any, AnyAction>;

const store = configureStore({
  reducer: rootReducer,
});

export default store;
