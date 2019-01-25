import React, { Component } from "react";
import "./App.css";
import Navbar from "./layouts/Navbar";
import Main from "./layouts/Main";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

const mapStateToProps = state => ({
  auth: state.auth
});

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar auth={this.props.auth} />
        <Main />
      </div>
    );
  }
}

App.propTypes = {
  auth: PropTypes.object
};

export default withRouter(connect(mapStateToProps)(App));
