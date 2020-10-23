import react from "react";

const UserInput = props => {
  const inputStyle = {
    boder: "2px solid red"
  };
  return (
    <input
      type="text"
      onChange={props.changed}
      value={props.name}
      style={inputStyle}
    />
  );
};
export default UserInput;
