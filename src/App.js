import React, { Component } from "react";
import "./App.css";
import Main from "./Main.js";

class App extends Component {
  render() {
    return (
      <div>
        <h1 className="heading">Your Todo List</h1>
        <Main />
      </div>
    );
  }
}

export default App;
