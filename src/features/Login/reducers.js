import { AUTHENTICATE, LOADING } from "./actionTypes";

const initialState = {
  loading: false,
  user: {
    email: null
  }
};

const isLogged = localStorage.getItem("email");
if (isLogged) {
  initialState.user.email = isLogged;
}

export const auth = (state = initialState, action) => {
  switch (action.type) {
    case LOADING:
      return { ...state, loading: action.status };

    case AUTHENTICATE:
      const { email } = action.user;
      return {
        ...state,
        user: {
          email
        }
      };

    default:
      return state;
  }
};
