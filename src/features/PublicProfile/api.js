export const getUser = async username => {
  const user = await fetch("http://localhost:8000/users/" + username)
    .then(response => response.json())
    .then(data => data);

  if (user) {
    return user;
  }
  return "stocazzo";
};
