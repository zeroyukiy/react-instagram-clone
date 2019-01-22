// export const getImages = () => {
//   setTimeout(() => {
//   return [
//     {
//       id: "123456789",
//       image_url: "https://img.pippolandia.com/1234hfd.jpg"
//     },
//     {
//       id: "948575731",
//       image_url: "https://img.pippolandia.com/sdfsdfsfsdfsd.jpg"
//     }
//   ];
//   }, 2000)
// };

// export const getImages = () => {
//   return {
//     type: "GET_IMAGES",
//     images: [
//       {
//         id: "123456789",
//         image_url: "https://img.pippolandia.com/1234hfd.jpg"
//       },
//       {
//         id: "948575731",
//         image_url: "https://img.pippolandia.com/sdfsdfsfsdfsd.jpg"
//       }
//     ]
//   };
// };

import { fetchImage } from "./api";
import { OPEN_MODAL_IMAGE, CLOSE_MODAL_IMAGE } from "./actionTypes";

export const getImages = () => {
  return async dispatch => {
    let images = [];
    for (let i = 0; i < 5; i++) {
      const image = await fetchImage();
      await images.push(image);
    }
    setTimeout(() => {
      dispatch({
        type: "GET_IMAGES",
        images
      });
    }, 600);
  };
};

export const openModalWindow = img => {
  return {
    type: OPEN_MODAL_IMAGE,
    isOpen: true,
    img
  };
};

export const closeModalWindow = () => {
  return {
    type: CLOSE_MODAL_IMAGE,
    isOpen: false,
    img: null
  };
};
