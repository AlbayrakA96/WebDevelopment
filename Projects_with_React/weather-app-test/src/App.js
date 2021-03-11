import React, { useState } from 'react'
import './App.css';
import Info from './Components/Info/Info'
import Country from './Components/Country/Country'

 const App = () => {
   let [tempSymbol, setTempSymbol] = useState('C')
  return (
    <main>
      <Info tempSymbol={tempSymbol} setTempSymbol={() => setTempSymbol(tempSymbol === 'C' ? 'F' : 'C')}/>
      <Country />
    </main>
  );
}

export default App;
