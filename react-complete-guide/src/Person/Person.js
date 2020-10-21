import React from "react";

const Person = props => {
  return (
    <p>
      I am {props.name} and I am {props.age} years Old!
    </p>
  );
};

export default Person;
