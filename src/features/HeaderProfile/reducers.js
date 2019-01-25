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
      const { name, login, picture } = action.payload;
      return {
        ...state,
        avatar: picture.large,
        username: login.username,
        fullname: `${name.first} ${name.last}`,
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras commodo vel nunc id vestibulum.",
        stats: {
          posts: 13,
          followers: 70,
          following: 17
        }
      };

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
