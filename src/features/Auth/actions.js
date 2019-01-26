import { AUTHENTICATE, LOADING, LOGOUT } from "./actionTypes";
import { authenticate } from "./api";
import { getInfoProfile } from "../HeaderProfile/api";

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
      // load fake data for the user
      let user = await getInfoProfile();
      user = {
        username: user.login.username,
        avatar: user.picture.large,
        fullname: `${user.name.first} ${user.name.last}`
      };
      localStorage.setItem("user", JSON.stringify(user));
      dispatch({
        type: AUTHENTICATE,
        payload: user
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
