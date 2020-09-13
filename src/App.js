import React, { Component } from "react";
import "./App.css";
import "./main.css";
import Input from "./Input";
import Output from "./Output.js";
class App extends Component {
  state = {
    todoList: [],
    input: "",
  };
  readInput = (event) => {
    this.setState({
      input: event.target.value,
    });
  };

  addToList = (input) => {
    let list = this.state.todoList;
    list.push(input);
    this.setState({
      todoList: list,
      input: "",
    });
  };

  render() {
    return (
      <div>
        <h1 className="heading">Your Todo List</h1>
        <div className="main">
          <div className="input">
            <Input
              read={(event) => this.readInput(event)}
              inputvalue={this.state.input}
            />
            <button
              className="input__button"
              onClick={() => this.addToList(this.state.input)}
            >
              Add
            </button>
          </div>
          <div className="output">
            {this.state.todoList.map((item) => (
              <Output todo={item} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
