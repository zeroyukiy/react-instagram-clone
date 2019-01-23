import { AUTHENTICATE, LOADING } from "./actionTypes";
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
      setTimeout(() => {
        localStorage.setItem("email", response.data.email)
        dispatch({
          type: AUTHENTICATE,
          user
        });
        dispatch({
          type: LOADING,
          status: false
        });
      }, 1500);
    } else {
      dispatch({
        type: LOADING,
        status: false
      });
      console.log("succhia qua");
    }
  };
};
