import React, {Component} from 'react'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
import TodoApp from './TodoApp/TodoApp'
import './App.css'

class App extends Component { 
  state = { 
    input: ""
  }
   onClickHandler = (event) => {
    console.log("er is geklikt")
  }


  render() {
  return (
    <div className="App">
      
      <Calendar />
      <div className="TodoApp">
      <h1>ToDolist</h1>
      <TodoApp change={this.onClickHandler}/>
      <p>hoi</p>
      </div>
    </div>
  )}
}

export default App;
