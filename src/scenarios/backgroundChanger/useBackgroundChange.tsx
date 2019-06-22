import * as React from "react";
import {useEffect} from "react";

const mouseoverEvent = "mouseover";
const mouseoutEvent = "mouseout";

const useBackgroundChange = (elemRef: React.MutableRefObject<HTMLDivElement | null>) => {
    useEffect(() => {
        const currentElem = elemRef.current;
        if (!currentElem) {
            return
        }

        const setBgColorForRef = (color: string | null) => () => currentElem && (currentElem.style.backgroundColor = color);
        const handleMouseover = setBgColorForRef("red");
        const handleMouseout = setBgColorForRef(null);

        currentElem.addEventListener(mouseoverEvent, handleMouseover);
        currentElem.addEventListener(mouseoutEvent, handleMouseout);

        return () => {
            if (!currentElem) {
                return;
            }

            currentElem.removeEventListener(mouseoverEvent, handleMouseover);
            currentElem.removeEventListener(mouseoutEvent, handleMouseout);
        };
    }, [elemRef]);
};

export default useBackgroundChange;