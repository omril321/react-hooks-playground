import React from 'react';
import './App.css';
import Adder from "./scenarios/adder/Adder";
import DelaysScenario from "./scenarios/sharedLoadingStateHook/DelaysScenario";
import Tabs, {ITabsProps} from "./tabs/Tabs";

function App() {
    const tabs: ITabsProps[] = [
        {tabName: 'Adder', tabContent: <Adder initialValue={0}/>},
        {tabName: 'Delays', tabContent: <DelaysScenario/>},
    ];

    return (
        <div className="App">
            <Tabs tabs={tabs}/>
        </div>
    );
}

export default App;
