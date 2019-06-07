import React, {useReducer, useContext} from 'react';

function reducer(state, action) {
    switch (action.type) {
        case 'increment':
            return {loadingCounter: state.loadingCounter + 1};
        case 'decrement':
            return {loadingCounter: Math.max(state.loadingCounter - 1, 0)};
        default:
            throw new Error();
    }
}


export const LoadingCounterContext = React.createContext(null);

export const LoadingCounterContextProvider = ({children}) => (
    <LoadingCounterContext.Provider value={useReducer(reducer, {loadingCounter: 0})}>
        {children}
    </LoadingCounterContext.Provider>
);

export const useLoadingCounter = () => useContext(LoadingCounterContext);