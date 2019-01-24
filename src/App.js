import React, { Component } from "react";
import "./App.css";
import Navbar from "./views/Navbar";
import Home from "./views/Home";
// import Main from "./views/Main";
import Profile from "./features/PublicProfile";
import { Switch, Route, withRouter } from "react-router-dom";
import { AuthLogin, AuthLogout, AuthSignup } from "./features/Auth";
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
          <Route exact path="/" component={Home} />
          <Route
            exact
            path="/@:user"
            render={props => (
              <Profile auth={this.props.auth} params={props.match.params} />
            )}
          />
          {/* <Route
            exact
            path="/@:user"
            render={props => (
              <Main auth={this.props.auth} params={props.match.params} />
            )}
          /> */}
          <Route path="/signin" component={AuthLogin} />
          <Route path="/logout" component={AuthLogout} />
          <Route path="/signup" component={AuthSignup} />
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
