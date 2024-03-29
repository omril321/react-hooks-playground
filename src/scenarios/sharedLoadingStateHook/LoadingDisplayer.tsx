import React from "react";
import {useLoadingCounter} from "./LoadingCounterContext";

const LoadingDisplayer = () => {
    const [loadingCounterValue] = useLoadingCounter();

    const isCurrentlyLoading = loadingCounterValue.loadingCounter > 0;

    return (
        <div>Loading? {isCurrentlyLoading ? "YES!" : "nope"} </div>
    )
};

export default LoadingDisplayer;