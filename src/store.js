import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./rootReducer";
import thunk from "redux-thunk";

const initialState = {
  gallery: {
    images: [],
    modalWindow: {
      isOpen: false,
      img: null,
      pos: null
    }
  }
};

export const store = createStore(
  rootReducer,
  initialState,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);
