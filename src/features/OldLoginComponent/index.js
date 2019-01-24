import React, { Component } from "react";
import { login } from "./actions";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const mapStateToProps = state => ({
  auth: state.auth
});

export class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
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

  handlePassword = e => {
    this.setState({
      password: e.target.value
    });
  };

  render() {
    return (
      <div className="login-account">
        <div className="info-message">
          {this.props.auth.loading ? (
            <h4>Loading ..</h4>
          ) : this.props.auth.user.email ? (
            <h4>Welcome {this.props.auth.user.email}</h4>
          ) : (
            <h4>Info</h4>
          )}
        </div>
        <form action="/" method="post" onSubmit={e => this.handleSubmit(e)}>
          <div className="input-style">
            <input
              type="text"
              value={this.state.email}
              placeholder="Email"
              onChange={e => this.handleEmail(e)}
            />
          </div>
          <div className="input-style">
            <input
              type="password"
              value={this.state.password}
              placeholder="Password"
              onChange={e => this.handlePassword(e)}
            />
          </div>
          <div className="input-style">
            <input
              className="btn btn-primary btn-lg"
              type="submit"
              value="Sign In"
            />
          </div>
        </form>
      </div>
    );
  }
}

Login.propTypes = {
  auth: PropTypes.object
};

export default (Login = connect(mapStateToProps)(Login));
