import { GET_IMAGES, OPEN_MODAL_IMAGE, CLOSE_MODAL_IMAGE } from "./actionTypes";

export const gallery = (state = null, action) => {
  switch (action.type) {
    case "TEST":
      return [...state, { id: 123, url: "http://lalala.test/test.png" }];

    case GET_IMAGES:
      const images = action.images;
      return { ...state, images };

    case OPEN_MODAL_IMAGE:
      return modalWindow(state, action);

    case CLOSE_MODAL_IMAGE:
      return modalWindow(state, action);

    default:
      return state;
  }
};

export const modalWindow = (state = {}, action) => {
  const { isOpen, img } = action;
  switch (action.type) {
    case OPEN_MODAL_IMAGE:
      return {
        ...state,
        modalWindow: {
          isOpen,
          img
        }
      };

    case CLOSE_MODAL_IMAGE:
      return {
        ...state,
        modalWindow: {
          isOpen,
          img
        }
      };

    default:
      return state;
  }
};
