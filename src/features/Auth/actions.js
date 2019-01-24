import { AUTHENTICATE, LOADING, LOGOUT } from "./actionTypes";
import { authenticate } from "./api";

export const login = user => {
  return async dispatch => {
    // here real call to the api
    dispatch({
      type: LOADING,
      status: true
    });

    // if the credentials are correct
    const response = await authenticate(user);
    if (response.status === "success") {
      localStorage.setItem("user", response.data.username);
      dispatch({
        type: AUTHENTICATE,
        user: response.data
      });
      dispatch({
        type: LOADING,
        status: false
      });
    } else {
      dispatch({
        type: LOADING,
        status: false
      });
      console.log("succhia qua");
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
