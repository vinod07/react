import react, { Component } from "react";
import "./App.css";
import UserInput from "./UserInput/UserInput";
import UserOutput from "./UserOutput/UserOutput";
class App extends Component {
  state = {
    username: "test"
  };

  onNameChangeHandler = event => {
    this.setState({ username: event.target.value });
  };
  render() {
    return (
      <div>
        <UserInput
          name={this.state.username}
          changed={this.onNameChangeHandler}
        />
        <UserOutput name={this.state.username} />
        <UserOutput name={this.state.username} />
      </div>
    );
  }
}

export default App;
