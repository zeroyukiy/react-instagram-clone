import React, { Component } from "react";
import "./App.css";
import Navbar from "./layouts/Navbar";
import Main from "./layouts/Main";
import { Switch, Route, withRouter } from "react-router-dom";
import Login from "./features/Login";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const mapStateToProps = state => ({
  auth: state.auth
});

const NotFoundComponent = () => {
  return <div>ERROR 404, PAGE NOT FOUND !</div>;
};

class App extends Component {
  componentDidUpdate() {}

  render() {
    return (
      <div className="App">
        <Navbar auth={this.props.auth} />
        <Switch>
          <Route
            exact
            path="/"
            render={() => <Main auth={this.props.auth} />}
          />
          {/* <Route exact path="/" component={Main} /> */}
          <Route path="/signin" component={Login} />
          <Route component={NotFoundComponent} />
        </Switch>
      </div>
    );
  }
}

App.propTypes = {
  auth: PropTypes.object
};

export default withRouter(connect(mapStateToProps)(App));
// export default App
