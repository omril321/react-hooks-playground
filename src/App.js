import React from 'react';
import './App.css';
import Adder from "./hooks/Adder";
import DelaysScenario from "./hooks/sharedStateHook/DelaysScenario";

function App() {
    return (
        <div className="App">
            <Adder initialValue={0}/>
            <DelaysScenario/>
        </div>
    );
}

export default App;
