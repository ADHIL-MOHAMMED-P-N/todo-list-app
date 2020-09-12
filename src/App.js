import React, { Component } from "react";
import "./App.css";
import "./main.css";
import Input from "./Input";
import Output from "./Output.js";
class App extends Component {
  render() {
    return (
      <div>
        <h1 className="heading">Your Todo List</h1>
        <div className="main">
          <div className="input">
            <Input />
            <button className="input__button">Add</button>
          </div>
          <div className="output">
            <Output />
            <Output />
            <Output />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
