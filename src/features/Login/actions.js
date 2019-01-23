import { AUTHENTICATE, LOADING } from "./actionTypes";

export const login = user => {
  return dispatch => {
    // here real call to the api
    dispatch({
      type: LOADING,
      status: true
    });

    // if the credentials are correct
    setTimeout(() => {
      if (user.email === "prova110@hotmail.com" && user.password === "asd111") {
        setTimeout(() => {
          dispatch({
            type: AUTHENTICATE,
            user
          });
          dispatch({
            type: LOADING,
            status: false
          });
        }, 3000);
      } else {
        dispatch({
          type: LOADING,
          status: false
        });
      }
    }, 300);
  };
};
