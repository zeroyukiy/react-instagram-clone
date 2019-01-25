import React, { Component } from "react";
import PropTypes from "prop-types";
import { login } from "../actions";
import { InfoMessage, Input, Submit } from "../../Style";

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "fake@test.ee",
      password: "test12345"
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    const user = {
      email: this.state.email,
      password: this.state.password
    };
    this.props.dispatch(login(user));
  };

  handleEmail = e => {
    this.setState({
      email: e.target.value
    });
  };

  handlePassword = e => {
    this.setState({
      password: e.target.value
    });
  };

  render() {
    const { loading, user } = this.props.auth;
    return (
      <div className="login-account">
        <InfoMessage loading={loading} username={user.username} />
        <form action="/" method="post" onSubmit={e => this.handleSubmit(e)}>
          <Input
            type="text"
            placeholder="Email"
            value={this.state.email}
            handleOnChange={this.handleEmail}
          />
          <Input
            type="password"
            placeholder="Password"
            value={this.state.password}
            handleOnChange={this.handlePassword}
          />
          <Submit value="Login" />
        </form>
      </div>
    );
  }
}

Login.propTypes = {
  auth: PropTypes.object
};

export default Login;
