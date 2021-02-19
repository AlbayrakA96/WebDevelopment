import React, { useState } from "react";
import "./App.css";
import Person from "./Person/Person";

const app = () => {
  const [personsState, setPersonsState] = useState({
    persons: [
      { name: "Anthony Joshua", age: 31 },
      { name: "Tyson Fury", age: 31 },
      { name: "Mike Tyson", age: 55 },
    ],
  });
  const [otherState, setOtherState] = useState("some other value");

  console.log(personsState, otherState);

  const switchNameHandler = () => {
    setPersonsState({
      persons: [
        { name: "Floyd Mayweather", age: 43 },
        { name: "Gervonta Davis", age: 24 },
        { name: "David Haney", age: 21 },
      ],
      otherState: personsState.otherState,
    });
  };

  return (
    <div className="App">
      <h1>Welcome to my React App!</h1>
      <p>This is really working!</p>
      <button onClick={switchNameHandler}>Switch Name</button>
      <Person name={personsState.persons[0].name} age={personsState.persons[0].age} />
      <Person name={personsState.persons[1].name} age={personsState.persons[1].age}>
        My Hobbies: Boxing
      </Person>
      <Person name={personsState.persons[2].name} age={personsState.persons[2].age} />
    </div>
  );
};

export default app;
