import React, { useState } from 'react';
import Tweet from './Tweet';

function App() {
  
  

  const [users, setUsers] = useState([
    { name: 'Abdusselam', message: "Hello i am Abdusselam." },
    { name: 'Ed', message: "Hello my name is Ed." },
    { name: 'Harold', message: "Hello i'm Harold" }
  ]);

  return (  
    <div className="app">
      {users.map(user => (
        <Tweet name={user.name} message={user.message} />
      ))}
      <p>{currentTime}</p>
    </div>

  );
}

export default App;