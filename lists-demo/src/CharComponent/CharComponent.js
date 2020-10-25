import { blockStatement } from "@babel/types";

const CharComponent = props => {
  let pStyle = {
    display: "inline-block",
    padding: "16px",
    textAlign: "center",
    margin: "16px",
    border: "1px solid black"
  };
  return (
    <p style={pStyle} onClick={props.click}>
      {props.input}
    </p>
  );
};

export default CharComponent;
