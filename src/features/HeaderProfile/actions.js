import { ADD_INFO_PROFILE, LOADING_PROFILE } from "./actionTypes";
import { getInfoProfile } from "./api";

export const addInfoProfile = () => {
  return async dispatch => {
    const profile = await getInfoProfile();
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
          payload: {
            username: profile.login.username,
            fullname: `${profile.name.first} ${profile.name.last}`,
            avatar: profile.picture.large
          }
        });
        dispatch({
          type: LOADING_PROFILE,
          payload: {
            isLoading: false
          }
        });
      }, 500);
    } else {
      console.log("something wrong, profile api call");
    }
  };
};

export const addInfoProfileCurrentUser = user => {
  return async dispatch => {
    if (user) {
      dispatch({
        type: LOADING_PROFILE,
        payload: {
          isLoading: true
        }
      });
      setTimeout(() => {
        const { username, fullname, avatar } = user;
        dispatch({
          type: ADD_INFO_PROFILE,
          payload: {
            username,
            fullname,
            avatar
          }
        });
        dispatch({
          type: LOADING_PROFILE,
          payload: {
            isLoading: false
          }
        });
      }, 500);
    } else {
      console.log("something wrong, profile api call");
    }
  };
};
