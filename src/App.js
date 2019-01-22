import React, { Component } from "react";
import "./App.css";
import Navbar from "./layouts/Navbar";
import Main from "./layouts/Main";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Main />
      </div>
    );
  }
}

export default App;
