import * as React from "react";
import Rectangle from "./Rectangle";
import {useEffect, useState} from "react";


const BackgroundChangeScenario = () => {
    const [rectsNum, setRectsNum] = useState<number>(1);

    const addRectangle = () => setRectsNum(rectsNum => rectsNum + 1);

    const removeRectangle = () => setRectsNum(rectsNum => rectsNum - 1);

    useEffect(() => {
        const addedInterval = setInterval(addRectangle, 1500);
        return () => clearInterval(addedInterval);
    }, []);

    return (
        <div style={{display: "flex"}}>
            {[...new Array(rectsNum)].map((ignored, index) =>
                <Rectangle key={index} onClick={removeRectangle}/>)
            }
        </div>
    )
};

export default BackgroundChangeScenario;