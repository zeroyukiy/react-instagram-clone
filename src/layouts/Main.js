import React from "react";
import PropTypes from "prop-types";
import ProfilePage from "../views/ProfilePage";
import { Switch, Route } from "react-router-dom";
import Home from "../views/Home";
import NotFound from "../views/errors/404";
import { LoginPage, RegisterPage, LogoutPage } from "../views/auth";

const Main = () => {
  return (
    <main>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route
          exact
          path="/@:user"
          render={props => <ProfilePage params={props.match.params} />}
        />
        <Route path="/signin" component={LoginPage} />
        <Route path="/logout" component={LogoutPage} />
        <Route path="/signup" component={RegisterPage} />
        <Route component={NotFound} />
      </Switch>
    </main>
  );
};

Main.propTypes = {
  auth: PropTypes.object
};

export default Main;
