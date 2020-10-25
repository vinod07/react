import react, { Component } from "react";
import "./App.css";
import Validation from "./Validation/Validation";
import CharComponent from "./CharComponent/CharComponent";
class App extends Component {
  state = {
    text: ""
  };
  inputChangeHandler = event => {
    this.setState({
      text: event.target.value
    });
  };
  deleteCharacterHandler = index => {
    let inputArray = this.state.text.split("");
    inputArray.splice(index, 1);
    this.setState({ text: inputArray.join("") });
  };
  render() {
    let chars = null;
    if (this.state.text) {
      let charArray = this.state.text.split("");
      {
        chars = charArray.map((char, index) => {
          return (
            <CharComponent
              input={char}
              click={() => this.deleteCharacterHandler(index)}
            />
          );
        });
      }
    }
    return (
      <div className="App">
        <input
          type="text"
          onChange={this.inputChangeHandler}
          value={this.state.text}
        />
        <p>Text Length: {this.state.text.length}</p>
        <Validation inputLength={this.state.text.length} />
        {chars}
      </div>
    );
  }
}

export default App;
