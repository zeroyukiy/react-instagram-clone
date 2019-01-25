export const getInfoProfile = () => {
  return fetch("https://randomuser.me/api/")
    .then(response => response.json())
    .then(data => data.results[0])
    .catch(error => error);
};
