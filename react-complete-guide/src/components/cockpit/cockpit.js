import React from "react";

const cockpit = props => {
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
  style.backgroundColor = "red";
  // Psuedo styles are not directly supported by react. Radium is a third party module that supports pseudo styles in react.
  style[":hover"] = {
    backgroundColor: "salmon",
    color: "black"
  };
  const classes = [];

  if (props.persons.length <= 2) {
    classes.push("red");
  }
  if (props.persons.length <= 1) {
    classes.push("bold");
  }
  return (
    <div>
      <h1>Hi, I am React App</h1>
      <p className={classes.join(" ")}>This is really working</p>
      {/* Having this.switchNameHandler() will invoke method call during page rendering itself. Added key for Radium to differentiate two buttons*/}
      <button key="one" style={style} onClick={props.clicked}>
        Show Persons
      </button>
    </div>
  );
};

export default cockpit;
