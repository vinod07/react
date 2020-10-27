import React, { Component } from "react";
import "./App.css";
import Persons from "./components/Persons/Persons";
import Radium, { StyleRoot } from "radium";
import styled from "styled-components";
import Cockpit from "./components/cockpit/cockpit";

const StyledButton = styled.button`
  background-color: ${props => (props.alt ? "red" : "green")};
  font: inherit;
  border: 1px solid blue;
  padding: 8px;
  cursor: pointer;
  &:hover {
    background-color: ${props => (props.alt ? "salmon" : "lightgreen")};
    color: black;
  }
`;
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
    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          <Persons
            persons={this.state.person}
            clicked={this.deletePersonsHandler}
            changed={this.onNameChangeHandler}
          />
        </div>
      );
    }
    return (
      // {/* For media queries, animation stylings components need to wrapped with StyleRoot while using Radium */}
      <StyleRoot>
        <div className="App">
          <Cockpit
            persons={this.state.person}
            clicked={this.toggleShowPersonsHandler}
          />
          {/*There are two ways to pass arguments in method. Using bind and arrow function. If using arrow functions
        this will refer to closest scope that is to the arrow function. Using bind, scope has to passed explicitly */}
          <StyledButton
            alt={this.state.showPersons}
            onClick={() => this.switchNameHandler("Rob")}
          >
            Switch Name
          </StyledButton>
          {persons}
        </div>
      </StyleRoot>
    );
  }
}

export default Radium(App);
