import React, { useState } from "react";
import "./App.css";
import Person from "./Person/Person";
const app = props => {
  const [personState, updatePersonState] = useState({
    person: [
      { name: "Max", age: "26" },
      { name: "Manu", age: "28" }
    ],
    otherState: "Test"
  });

  const [otherUseState, updateOtherUseState] = useState("second use state");

  console.log(personState);
  const switchNameHandler = () => {
    updatePersonState({
      person: [
        { name: "Maximillan", age: "26" },
        { name: "Manu", age: "29" }
      ],
      otherState: "Test" //If not defined here, this state will be lost. To avoid this multiple useStates can be used.
    });
  };
  console.log(personState.otherState);
  console.log(otherUseState);
  return (
    <div className="App">
      <h1>Hi, I am React App</h1>
      {/* Having this.switchNameHandler() will invoke method call during page rendering itself. */}
      <button onClick={switchNameHandler}>Switch Name</button>
      <Person
        name={personState.person[0].name}
        age={personState.person[0].age}
      />
      <Person name={personState.person[1].name} age={personState.person[1].age}>
        My Hobbies: Racing
      </Person>
    </div>
  );
};

export default app;
