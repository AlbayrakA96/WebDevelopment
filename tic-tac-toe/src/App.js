import React from 'react'; 
import Tweet from './Tweet';

function App(){

  const sayHello = () => {
    console.log("hello");
  };

  const counter = 0;

  return(
    <div class="app">
      <h1>Hello React.</h1>
      <div class="app__Container">
      <Tweet name="Albayrak" />
      <Tweet name="Chakai" />
      <Tweet name="Sayf" />
      </div>
    </div>
  );
}

export default App;