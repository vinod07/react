import Person from "./Person/Person";
import React, { Component } from "react";
class Persons extends Component {
  //extending PureComponent instead of Component is an alternative to shouldComponentUpdate. PureComponent takes of all prop checks too.
  //Component will rerender if shouldComponentUpdate method returns true.
  //While updating persons in app.js new persons array is created and then updated. This will keep the current persons reference unchanged.
  //Hence it will be used to compare updated persons reference to existing reference during rerendering and will be rerendered only
  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.persons !== this.props.persons) {
      return true;
    } else {
      return false;
    }
  }
  /* React uses key to compare list elements in virtual dom with past verson and render only changed elements. 
      This is useful while rendering larger list elements as it avoids rendering whole list  */
  render() {
    return this.props.persons.map((person, index) => {
      return (
        <Person
          name={person.name}
          age={person.age}
          key={person.id}
          click={() => this.props.clicked(index)}
          changed={event => this.props.changed(event, person.id)}
        />
      );
    });
  }
}
export default Persons;
