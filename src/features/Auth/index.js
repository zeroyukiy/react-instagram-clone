import React, { Component } from "react";
import { login, logout } from "./actions";
import PropTypes from "prop-types";
import { Redirect, withRouter } from "react-router-dom";
import { connect } from "react-redux";

const mapStateToProps = state => ({
  auth: state.auth
});

class Login extends Component {
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
    const { loading, user } = this.props.auth;
    return (
      <div className="login-account">
        <div className="info-message">
          {loading ? (
            <h4>Loading ..</h4>
          ) : user.username ? (
            <Redirect to="/" />
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

export const AuthLogin = connect(mapStateToProps)(Login);

class Logout extends Component {
  componentWillMount() {
    this.props.dispatch(logout());
  }

  render() {
    return <Redirect to="/" />;
  }
}

Logout.propTypes = {
  dispatch: PropTypes.func
};

export const AuthLogout = withRouter(connect()(Logout));

class Signup extends Component {
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
        <div className="info-message">
          {loading ? (
            <h4>Loading ..</h4>
          ) : user.username ? (
            <Redirect to="/" />
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
              type="text"
              value={this.state.fullname}
              placeholder="Fullname"
              onChange={e => this.handleFullname(e)}
            />
          </div>
          <div className="input-style">
            <input
              type="text"
              value={this.state.username}
              placeholder="Username"
              onChange={e => this.handleUsername(e)}
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
              value="Sign Up"
            />
          </div>
        </form>
      </div>
    );
  }
}

Signup.propTypes = {
  auth: PropTypes.object
};

export const AuthSignup = connect(mapStateToProps)(Signup);
