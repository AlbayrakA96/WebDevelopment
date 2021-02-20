import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { name: "Anthony Joshua", age: 31 },
      { name: "Tyson Fury", age: 31 },
      { name: "Deontay Wilder", age: 34 },
    ],
    otherState: "some other value",
  };

  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        { name: newName, age: 24 },
        { name: "David Haney", age: 21 },
        { name: "Ryan Garcia", age: 21 },
      ],
    });
  };

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: "Anthony Joshua", age: 24 },
        { name: event.target.value, age: 21 },
        { name: "Ryan Garcia", age: 21 },
      ],
    });
  };
  render() {
    const style = {
      backgroundColor: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer",
    };
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button style={style} onClick={() => this.switchNameHandler("Joshua!!!!")}>
          Switch Name
        </button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[0].age}
          click={this.switchNameHandler.bind(this, "Joshua!")}
          changed={this.nameChangedHandler}
        >
          My Hobbies: Boxing{" "}
        </Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[0].age} />
      </div>
    );
  }
}
export default App;
