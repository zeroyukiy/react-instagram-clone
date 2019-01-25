export const getInfoProfile = username => {
  return fetch("http://localhost:8000/users/" + username)
    .then(response => response.json())
    .then(data => data.data)
    .catch(error => error);
};
