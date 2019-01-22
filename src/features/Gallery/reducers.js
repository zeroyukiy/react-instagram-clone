import {
  GET_IMAGES,
  OPEN_MODAL_IMAGE,
  CLOSE_MODAL_IMAGE,
  CLEAR_GALLERY
} from "./actionTypes";

export const gallery = (state = null, action) => {
  switch (action.type) {
    case CLEAR_GALLERY:
      return { ...state, images: [] };

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
