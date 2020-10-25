import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";
import Radium from "radium";
class App extends Component {
  state = {
    person: [
      { id: "test1", name: "Max", age: "26" },
      { id: "test2", name: "Manu", age: "28" }
    ],
    otherState: "Test",
    showPersons: false
  };

  switchNameHandler = newName => {
    this.setState({
      person: [
        { id: "test1", name: "Maximillan", age: "26" },
        { id: "test2", name: newName, age: "29" }
      ],
      otherState: "Test"
    });
  };

  onNameChangeHandler = (event, id) => {
    const personIndex = this.state.person.findIndex(person => {
      return person.id === id;
    });

    const person = { ...this.state.person[personIndex] };

    // const person = Object.assign({}, this.state.person[personIndex]); //Other way to fetch person without reference.

    person.name = event.target.value;

    const persons = [...this.state.person];

    persons[personIndex] = person;

    this.setState({
      person: persons
    });
  };

  deletePersonsHandler = index => {
    // const persons = this.state.person; //this will give reference to original person array. Modification persons elemement will also modify person array in state.
    // const persons = this.state.person.slice(); //Alternative above line. Give the values not reference.
    const persons = [...this.state.person]; //Modern approach using spread.
    persons.splice(index, 1);
    this.setState({ person: persons });
  };
  toggleShowPersonsHandler = () => {
    const showPerson = this.state.showPersons;
    this.setState({ showPersons: !showPerson });
    console.log(this.state);
  };
  render() {
    const style = {
      backgroundColor: "green",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer",
      ":hover": {
        backgroundColor: "lightgreen",
        color: "black"
      }
    };

    let persons = null;

    const classes = [];

    if (this.state.person.length <= 2) {
      classes.push("red");
    }
    if (this.state.person.length <= 1) {
      classes.push("bold");
    }

    if (this.state.showPersons) {
      {
        /* React uses key to compare list elements in virtual dom with past verson and render only changed elements. 
      This is useful while rendering larger list elements as it avoids rendering whole list  */
      }
      persons = (
        <div>
          {this.state.person.map((person, index) => {
            return (
              <Person
                name={person.name}
                age={person.age}
                key={person.id}
                click={this.deletePersonsHandler}
                changed={event => this.onNameChangeHandler(event, person.id)}
              />
            );
          })}
        </div>
      );
      style.backgroundColor = "red";
      //Psuedo styles are not directly supported by react. Radium is a third party module that supports pseudo styles in react.
      style[":hover"] = {
        backgroundColor: "salmon",
        color: "black"
      };
    }
    return (
      <div className="App">
        <h1>Hi, I am React App</h1>
        <p className={classes.join(" ")}>This is really working</p>
        {/* Having this.switchNameHandler() will invoke method call during page rendering itself. Added key for Radium to differentiate two buttons*/}
        <button key="one" style={style} onClick={this.toggleShowPersonsHandler}>
          Show Persons
        </button>
        {/*There are two ways to pass arguments in method. Using bind and arrow function. If using arrow functions
        this will refer to closest scope that is to the arrow function. Using bind, scope has to passed explicitly */}
        <button style={style} onClick={() => this.switchNameHandler("Rob")}>
          Switch Name
        </button>
        {persons}
      </div>
    );
  }
}

export default Radium(App);
