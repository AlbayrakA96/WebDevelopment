import './App.css';
import Person from './Persons/Person'

function App() {
  

  return (
    <div className="App">
      <h1>React app!</h1>
      <p>Is this really working?</p>
      <Person name="Henk" hobby="Voetbal"/>
      <Person name="Jan" hobby="/"/>
      <Person name="Kees" hobby="Voetbal"/>
    </div>
  );
}

export default App;
