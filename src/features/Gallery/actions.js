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

import { fetchUser } from "./api";

export const getImages = () => {
  return async dispatch => {
    const user = await fetchUser();
    dispatch({
      type: "GET_IMAGES",
      images: user[0]
    });
  };
};
