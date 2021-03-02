import React, { useState } from "react";
import "./App.css";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import TodoApp from "./TodoApp/TodoApp";

const data = {
  datums: [
    { date: "20-1-2021", name: "meDay" },
    { date: 10, month: 2, name: "KillmeDay" },
  ],
};
function tileContent({ date, view }) {
  return data.datums.map((el) => {
    return view === "month" && date.getDate(" ") === el.date ? (
      <p>{JSON.stringify(el.name)}</p>
    ) : null;
  });
}

function App() {
  const [value, setValue] = useState(new Date());
  function onChange(nextValue) {
    setValue(nextValue);
  }
  return (
    <div className="App">
      <Calendar tileContent={tileContent} onChange={onChange} value={value} />

      <TodoApp />
    </div>
  );
}

export default App;
