import * as React from "react";
import "./Rectangle.scss";
import useBackgroundChange from "./useBackgroundChange";

const Rectangle = ({onClick}: { onClick: () => void }) => {
    const ref = React.createRef<HTMLDivElement>();
    useBackgroundChange(ref);

    return <div onClick={onClick} className="rectangle" ref={ref}/>;
};


export default Rectangle;