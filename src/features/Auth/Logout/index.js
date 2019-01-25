import React, { Component } from "react";
import PropTypes from "prop-types";
import { Redirect, withRouter } from "react-router-dom";
import { logout } from "../actions";

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

export default withRouter(Logout);
