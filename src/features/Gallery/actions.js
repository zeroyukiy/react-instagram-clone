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
    }, 600)
  };
};
