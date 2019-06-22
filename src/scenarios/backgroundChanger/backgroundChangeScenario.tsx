import * as React from "react";
import Rectangle from "./Rectangle";
import {ReactElement, useCallback, useEffect, useState} from "react";


const BackgroundChangeScenario = () => {
    const [rects, setRects] = useState<ReactElement[]>([]);

    const addRectangle = useCallback(() => {
        setRects(rects => [...rects, <Rectangle key={rects.length} onClick={addRectangle}/>]);
    }, []);

    useEffect(() => {
        const addedInterval = setInterval(addRectangle, 3000);
        return () => clearInterval(addedInterval);
    }, [addRectangle]);

    return (
        <div style={{display: "flex"}}>
            {rects}
        </div>
    )
};

export default BackgroundChangeScenario;