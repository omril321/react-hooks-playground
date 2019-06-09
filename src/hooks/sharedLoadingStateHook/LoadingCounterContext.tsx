import React, {useReducer, useContext, Dispatch} from 'react';

interface LoadingCounterState {
    loadingCounter: number;
}

interface LoadingCounterReducerAction {
    type: 'increment' | 'decrement';
}

function reducer(state: LoadingCounterState, action: LoadingCounterReducerAction) {
    switch (action.type) {
        case 'increment':
            return {loadingCounter: state.loadingCounter + 1};
        case 'decrement':
            return {loadingCounter: Math.max(state.loadingCounter - 1, 0)};
        default:
            throw new Error();
    }
}

export const LoadingCounterContext = React.createContext<[LoadingCounterState, Dispatch<LoadingCounterReducerAction>]>(null as any /*this is a small hack for convenience*/);

/**
 * The provided value in the context is actually the result of `useReducer`. Meaning: [currentValue, dispatch].
 * Thus all consumers can use current value, and dispatch actions as needed.
 */
export const LoadingCounterContextProvider = ({children}: { children: React.ReactNode }) => (
    <LoadingCounterContext.Provider value={useReducer(reducer, {loadingCounter: 0})}>
        {children}
    </LoadingCounterContext.Provider>
);

export const useLoadingCounter = () => useContext(LoadingCounterContext);