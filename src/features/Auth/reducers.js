import { AUTHENTICATE, LOADING, LOGOUT } from "./actionTypes";

const initialState = {
  loading: false,
  user: {
    username: null
  }
};

const user = localStorage.getItem("user");
if (user) {
  initialState.user.username = user;
}

export const auth = (state = initialState, action) => {
  switch (action.type) {
    case LOADING:
      return { ...state, loading: action.payload.status };

    case AUTHENTICATE:
      const { username } = action.payload;
      return {
        ...state,
        user: {
          username
        }
      };

    case LOGOUT:
      return {
        ...state,
        user: {
          username: null
        }
      };

    default:
      return state;
  }
};
