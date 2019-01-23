// Fake api for user authentication

let wait = ms => new Promise(resolve => setTimeout(resolve, ms));

export const authenticate = async user => {
  if (user.email === "prova110@hotmail.com" && user.password === "asd111") {
    await wait(2000);
    return {
      status: "success",
      data: {
        email: user.email
      }
    };
  }
  return {
    status: "error"
  };
};
