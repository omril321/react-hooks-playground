import React from 'react';
import './App.css';
import Adder from "./hooks/Adder";

function App() {
  return (
    <div className="App">
      <Adder initialValue={0}/>
    </div>
  );
}

export default App;
