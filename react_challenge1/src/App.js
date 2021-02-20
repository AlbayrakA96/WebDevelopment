import React, { Component } from "react";
import "./App.css";

import UserInput from "./UserInput/Userinput";
import UserOutput from "./UserOutput/Useroutput";

class App extends Component {
  state = {
    username: " ",
    typeusername: "Type your name;",
  };

  usernameChangedHandler = (event) => {
    this.setState({ username: event.target.value });
  };
  render() {
    return (
      <div className="App">
        <UserInput currentName={this.state.username} changed={this.usernameChangedHandler} />
        <UserOutput userName={this.state.username} />
        <UserOutput userName={this.state.username} />
        <UserOutput userName={this.state.username} />
      </div>
    );
  }
}
export default App;
