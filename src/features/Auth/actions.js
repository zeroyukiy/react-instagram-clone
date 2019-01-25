import { AUTHENTICATE, LOADING, LOGOUT } from "./actionTypes";
import { authenticate } from "./api";

export const login = user => {
  return async dispatch => {
    // here real call to the api
    dispatch({
      type: LOADING,
      payload: {
        status: true
      }
    });

    // if the credentials are correct
    const response = await authenticate(user);
    if (response) {
      localStorage.setItem("user", response.username);
      dispatch({
        type: AUTHENTICATE,
        payload: response
      });
      dispatch({
        type: LOADING,
        payload: {
          status: false
        }
      });
    } else {
      dispatch({
        type: LOADING,
        payload: {
          status: false
        }
      });
      console.log("something wrong, login credentials");
    }
  };
};

export const logout = () => {
  return dispatch => {
    localStorage.removeItem("user");
    dispatch({
      type: LOGOUT
    });
    console.log("user logged out");
  };
};
