// Fake api for user authentication

let wait = ms => new Promise(resolve => setTimeout(resolve, ms));

export const authenticate = async user => {
  const { email, password } = user;

  // here fake api
  if(email && password.length > 8) {
    await wait(600);
    return {
      username: "Test",
    }
  }

  // return await fetch("http://localhost:8000/auth/authenticate", {
  //   method: "POST",
  //   headers: {
  //     "content-type": "application/json"
  //   },
  //   body: JSON.stringify({
  //     email,
  //     password
  //   })
  // })
  //   .then(response => response.json())
  //   .then(data => data);
};
