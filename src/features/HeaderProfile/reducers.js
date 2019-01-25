import { ADD_INFO_PROFILE, LOADING_PROFILE } from "./actionTypes";

const initialState = {
  isLoading: false,
  avatar:
    "https://collaborativecbt.com/wp-content/uploads/2016/12/default-avatar.png",
  username: "",
  fullname: "",
  description: "",
  stats: {
    posts: 0,
    followers: 0,
    following: 0
  }
};

export const profile = (state = initialState, action) => {
  switch (action.type) {
    case ADD_INFO_PROFILE:
      const { avatar, username, fullname, description, stats } = action.payload;
      return { ...state, avatar, username, fullname, description, stats };

    case LOADING_PROFILE:
      const { isLoading } = action.payload;
      return {
        ...state,
        isLoading
      };

    default:
      return state;
  }
};
