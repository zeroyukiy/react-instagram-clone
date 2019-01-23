import { AUTHENTICATE, LOADING } from "./actionTypes";

export const auth = (state = {}, action) => {
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
