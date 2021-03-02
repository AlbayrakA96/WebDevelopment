import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./App.css";
const data = {
  datums: [
    { date: 20, month: 2, name: "meDay" },
    { date: 10, month: 2, name: "KillmeDay" },
  ],
};
function tileContent({ date, view }) {
  return data.datums.map((el) => {
    return view === "month" &&
      date.getDate() === el.date &&
      date.getMonth() === el.month ? (
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
      <div>
        <pre style={{ backgroundColor: "#eee" }}>
          {JSON.stringify(data.datums, null, 2)}
        </pre>
        <pre style={{ backgroundColor: "red" }}>
          {JSON.stringify(data.datums.name)}
        </pre>
        <pre style={{ backgroundColor: "lightblue" }}>
          {JSON.stringify(data.datums[1].month)}
        </pre>
        <pre style={{ backgroundColor: "lightgreen" }}>
          {JSON.stringify(data.datums[0].date)}
        </pre>
        <pre style={{ backgroundColor: "red" }}>
          {JSON.stringify(data.name)}
        </pre>
        <pre style={{ backgroundColor: "lightblue" }}>
          {JSON.stringify(data.month)}
        </pre>
        <pre style={{ backgroundColor: "lightgreen" }}>
          {JSON.stringify(data.date)}
        </pre>
      </div>
    </div>
  );
}
export default App;
