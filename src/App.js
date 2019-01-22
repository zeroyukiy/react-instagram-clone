import React, { Component } from "react";
import "./App.css";
import Navbar from "./layouts/Navbar";
import Main from "./layouts/Main";
import { Switch, Route } from "react-router-dom";

const SigninComponent = () => {
  return <div>yeeeeee</div>;
};

const NotFoundComponent = () => {
  return <div>ERROR 404, PAGE NOT FOUND !</div>;
};

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/signin" component={SigninComponent} />
          <Route component={NotFoundComponent} />
        </Switch>
      </div>
    );
  }
}

export default App;
