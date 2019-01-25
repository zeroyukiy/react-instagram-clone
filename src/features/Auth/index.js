import { connect } from "react-redux";
import Login from "./Login";
import Logout from "./Logout";
import Register from "./Register";

const mapStateToProps = state => ({
  auth: state.auth
});

export const AuthLogin = connect(mapStateToProps)(Login);
export const AuthLogout = connect(mapStateToProps)(Logout);
export const AuthRegister = connect(mapStateToProps)(Register);
