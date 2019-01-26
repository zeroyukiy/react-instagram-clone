import { AUTHENTICATE, LOADING, LOGOUT } from "./actionTypes";

let initialState = {
  loading: false,
  user: {
    username: "",
    fullname: "",
    avatar: ""
  }
};

const user = JSON.parse(localStorage.getItem("user"));

if (user) {
  const { username, fullname, avatar } = user;
  initialState = {
    loading: false,
    user: {
      username,
      fullname,
      avatar
    }
  };
}

export const auth = (state = initialState, action) => {
  switch (action.type) {
    case LOADING:
      return { ...state, loading: action.payload.status };

    case AUTHENTICATE:
      const { username, fullname, avatar } = action.payload;
      return {
        ...state,
        user: {
          username,
          fullname,
          avatar
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
