import React from "react";

const Person = props => {
  return (
    <div>
      <p>
        I am {props.name} and I am {props.age} years Old!
      </p>
      <p>{props.children}</p>
    </div>
  );
};

export default Person;
