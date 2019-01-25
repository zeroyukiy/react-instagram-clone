import React from "react";
import { AuthLogin } from "../../features/Auth";

const LoginPage = () => {
  return (
    <div>
      <h4>Login Page</h4>
      <AuthLogin toLoad="login"/>
    </div>
  );
};

export default LoginPage;
