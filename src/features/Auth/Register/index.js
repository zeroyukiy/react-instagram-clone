import React, { Component } from "react";
import PropTypes from "prop-types";
import { InfoMessage, Input, Submit } from "../../Style";
import { login } from "../actions";

class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      fullname: "",
      username: "",
      password: ""
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

  handleFullname = e => {
    this.setState({
      fullname: e.target.value
    });
  };

  handleUsername = e => {
    this.setState({
      username: e.target.value
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
            value={this.state.email}
            placeholder="Email"
            handleOnChange={this.handleEmail}
          />
          <Input
            type="text"
            value={this.state.fullname}
            placeholder="Fullname"
            handleOnChange={this.handleFullname}
          />
          <Input
            type="text"
            value={this.state.username}
            placeholder="Username"
            handleOnChange={this.handleUsername}
          />
          <Input
            type="text"
            value={this.state.password}
            placeholder="Password"
            handleOnChange={this.handlePassword}
          />
          <Submit value="Register" />
        </form>
      </div>
    );
  }
}

Register.propTypes = {
  auth: PropTypes.object
};

export default Register;
