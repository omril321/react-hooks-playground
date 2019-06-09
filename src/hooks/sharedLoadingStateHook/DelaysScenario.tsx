import React from "react";
import LoadingDisplayer from "./LoadingDisplayer";
import Delayer from "./Delayer";
import {LoadingCounterContextProvider} from "./LoadingCounterContext";

const DelaysScenario = () => {
    return (
        <div>
            <LoadingCounterContextProvider>
                <h1>DELAYS:</h1>
                <Delayer msToDelayWhenClicked={1000}/>
                <Delayer msToDelayWhenClicked={5000}/>
                <LoadingDisplayer/>
            </LoadingCounterContextProvider>
        </div>
    )
};

export default DelaysScenario;