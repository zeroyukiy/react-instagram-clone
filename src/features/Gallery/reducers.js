import { GET_IMAGES } from "./actionTypes";

export const gallery = (state = null, action) => {
  switch (action.type) {
    case "TEST":
      return [...state, { id: 123, url: "http://lalala.test/test.png" }];

    case GET_IMAGES:
      const images = action.images;
      return { ...state, images };

    default:
      return state;
  }
};
