import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";
class App extends Component {
  state = {
    person: [
      { name: "Max", age: "26" },
      { name: "Manu", age: "28" }
    ],
    otherState: "Test"
  };

  switchNameHandler = newName => {
    this.setState({
      person: [
        { name: "Maximillan", age: "26" },
        { name: newName, age: "29" }
      ],
      otherState: "Test" //If not defined here, this state will be lost. To avoid this multiple useStates can be used.
    });
  };

  onNameChangeHandler = event => {
    this.setState({
      person: [
        { name: event.target.value, age: "26" },
        { name: "Manu", age: "29" }
      ],
      otherState: "Test" //If not defined here, this state will be lost. To avoid this multiple useStates can be used.
    });
  };
  render() {
    const style = {
      backgroundColor: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer"
    };
    return (
      <div className="App">
        <h1>Hi, I am React App</h1>
        {/* Having this.switchNameHandler() will invoke method call during page rendering itself. */}
        <button onClick={this.switchNameHandler.bind(this, "Ram")}>
          Switch Name
        </button>
        {/*There are two ways to pass arguments in method. Using bind and arrow function. If using arrow functions
        this will refer to closest scope that is to the arrow function. Using bind, scope has to passed explicitly */}
        <button style={style} onClick={() => this.switchNameHandler("Rob")}>
          Switch Name
        </button>
        <Person
          name={this.state.person[0].name}
          age={this.state.person[0].age}
          changed={this.onNameChangeHandler}
        />
        <Person
          name={this.state.person[1].name}
          age={this.state.person[1].age}
          click={this.switchNameHandler.bind(this, "Dweeb")}
        >
          My Hobbies: Racing
        </Person>
      </div>
    );
  }
}

export default App;
