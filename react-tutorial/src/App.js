import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { name: "Naam", age: "Leeftijd" },
      { name: "Manu", age: 23 },
      { name: "Jan", age: 24 },
    ],
    otherState: "some other value",
  };

  switchNameHandler = () => {
    console.log("Was clicked");
    //DONT DO this.state.persons[0].name = "Abdusselam";
    this.setState({
      persons: [
        { name: "Abdusselam", age: 24 },
        { name: "", age: "" },
        { name: "", age: "" },
      ],
    });
  };

  render() {
    return (
      <div className="App">
        <h1>Hi I'm a React App</h1>
        <p>This is really working!</p>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
        >
          My Hobbies: Racing
        </Person>
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
        />
      </div>
    );
    // return React.createElement(
    //   "div",
    //   { className: "App" },
    //   React.createElement("h1", null, "Does this work now?")
    // );
  }
}

export default App;
