import Person from "./Person/Person";
import React from "react";
const persons = props =>
  props.persons.map((person, index) => {
    /* React uses key to compare list elements in virtual dom with past verson and render only changed elements. 
      This is useful while rendering larger list elements as it avoids rendering whole list  */
    return (
      <Person
        name={person.name}
        age={person.age}
        key={person.id}
        click={() => props.clicked(index)}
        changed={event => props.changed(event, person.id)}
      />
    );
  });

export default persons;
