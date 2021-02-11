import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import App from './App';
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.css";
import Counter from "./components/tictactoeComps";

const element = <h1>Hello World</h1>;

ReactDOM.render(<Counter />, document.getElementById("root"));

// function Heading() {
//   return <h1>Abdusselam Albayrak</h1>
// }

// ReactDOM.render(
//   <React.StrictMode>
//     <Heading />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
