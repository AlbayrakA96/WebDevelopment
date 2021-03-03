import React, { useState } from "react";
import "./App.css";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import TodoApp from "./TodoApp/TodoApp";
import data from "./data";

const tileContent = ({ activeStarDate, date, view }) => {
  return data.map((el) => {
    const datum = new Date(el.date);
    const naam = el.name.slice(0, 1);

    return view === "month" &&
      date.getDate() === datum.getDate() &&
      date.getMonth() === datum.getMonth() ? (
      <p style={{ backgroundColor: "blue", color: "white" }}>{naam}</p>
    ) : null;
  });
};

function App() {
  const [value, setValue] = useState(new Date());
  function onChange(nextValue) {
    setValue(nextValue);
  }

  // toggleTodoApp = () => {
  //   visible = false;
  // };
  return (
    <div className="App">
      <Calendar
        className="Calendar"
        tileContent={tileContent}
        value={value}
        // onClickDay={toggleTodoApp}
      />

      <TodoApp />
    </div>
  );
}

export default App;
