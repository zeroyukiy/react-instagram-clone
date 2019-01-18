import { createStore, combineReducers } from "redux";
import rootReducer from "./rootReducer";

const initialState = {};

export const store = createStore(
  rootReducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);