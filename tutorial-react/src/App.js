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
    showPersons: false,
  };

  // switchNameHandler = (newName) => {
  //   this.setState({
  //     persons: [
  //       { name: "Anthony Joshua", age: 31 },
  //       { name: newName, age: 21 },
  //       { name: "Deontay Wilder!", age: 31 },
  //     ],
  //   });
  // };

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: "Anthony Joshua", age: 31 },
        { name: event.target.value, age: 21 },
        { name: "Deontay Wilder!", age: 31 },
      ],
    });
  };

  deletePersonHandler = (personIndex) => {
    const persons = this.state.persons;
    persons.splice(personIndex, 1);
    this.setState({ perons: persons });
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };
  render() {
    const style = {
      backgroundColor: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer",
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person) => {
            return;
            <Person name={person.name} age={person.age} />;
          })}
        </div>
      );
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button style={style} onClick={this.togglePersonsHandler}>
          <span>Toggle Persons</span>
        </button>
        {persons}
      </div>
    );
  }
}
export default App;
