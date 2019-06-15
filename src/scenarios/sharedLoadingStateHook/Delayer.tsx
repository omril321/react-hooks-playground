import React from "react";
import {useLoadingCounter} from "./LoadingCounterContext";

const Delayer = ({msToDelayWhenClicked}: {msToDelayWhenClicked: number}) => {
        const [loadingCounterValue, loadingCounterDispatch] = useLoadingCounter();

        const isCurrentlyLoading = loadingCounterValue.loadingCounter > 0;

        const handleClick = () => {
            loadingCounterDispatch({type: 'increment'});
            setTimeout(() => loadingCounterDispatch({type: 'decrement'}), msToDelayWhenClicked);
        };

        return (
            <button onClick={handleClick}>
                Delay by {msToDelayWhenClicked / 1000} seconds (currently loading? {isCurrentlyLoading ? "YES" : "NO"})
            </button>
        )
    }
;

export default Delayer;