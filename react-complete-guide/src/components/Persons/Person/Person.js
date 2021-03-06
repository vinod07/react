import React from "react";
// import "./Person.css";
import Radium from "radium";
import styled from "styled-components";

const StyledDiv = styled.div`
  width: 60%;
  margin: 16px auto;
  border: 1px solid black;
  box-shadow: 0 2px 3px #ccc;
  padding: 16px;
  text-align: center;
  "@media(min-width:500px)": {
    width: "450px";
  }
`;
const Person = props => {
  const style = {
    "@media(min-width:500px)": {
      width: "450px"
    }
  };
  return (
    // <div className="Person" style={style}>
    <StyledDiv>
      <p onClick={props.click}>
        I am {props.name} and I am {props.age} years Old!
      </p>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} value={props.name} />
    </StyledDiv>
    // {/* </div> */}
  );
};

export default Radium(Person);
