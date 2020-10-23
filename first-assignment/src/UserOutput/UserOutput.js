import react from "react";
import "./UserOutput.css";
const UserOutput = props => {
  return (
    <div>
      <p className="UserOutput">{props.name}</p>
    </div>
  );
};
export default UserOutput;
