import React from "react";
import {useState} from "react";

const Adder = ({initialValue}) => {
    const [currentValue, setValue] = useState(initialValue);
    const add = toAdd => () => setValue(currentValue+toAdd);

    return (
        <>
            <div>Current value: {currentValue}</div>
            <button onClick={add(1)}>+1</button>
            <button onClick={add(-1)}>-1</button>
        </>
    )
};


export default Adder;