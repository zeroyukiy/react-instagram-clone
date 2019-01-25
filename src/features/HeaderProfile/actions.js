import { ADD_INFO_PROFILE, LOADING_PROFILE } from "./actionTypes";
import { getInfoProfile } from "./api";

export const addInfoProfile = username => {
  return async dispatch => {
    const profile = await getInfoProfile(username);
    if (profile) {
      dispatch({
        type: LOADING_PROFILE,
        payload: {
          isLoading: true
        }
      });
      setTimeout(() => {
        dispatch({
          type: ADD_INFO_PROFILE,
          payload: profile
        });
        dispatch({
          type: LOADING_PROFILE,
          payload: {
            isLoading: false
          }
        });
      }, 500);
    } else {
      console.log("stu cazz");
    }
  };
};
