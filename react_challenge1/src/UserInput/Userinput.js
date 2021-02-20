import React from "react";

import "./UserInput.css";

const userInput = (props) => {
  const inputStyle = {
    border: "2px solid red",
  };
  return <input className="UserInput" type="text" style={inputStyle} value={props.currentName} onChange={props.changed} />;
};

export default userInput;
