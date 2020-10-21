import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Person from "./Person/Person";
class App extends Component {
  state = {
    person: [
      { name: "Max", age: "26" },
      { name: "Manu", age: "28" }
    ]
  };

  switchNameHandler() {
    console.log("Function is clicked");
  }

  render() {
    return (
      <div className="App">
        <h1>Hi, I am React App</h1>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person
          name={this.state.person[0].name}
          age={this.state.person[0].age}
        />
        <Person name={this.state.person[1].name} age={this.state.person[1].age}>
          My Hobbies: Racing
        </Person>
      </div>
    );
  }
}

export default App;
