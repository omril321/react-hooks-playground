import * as React from "react";
import {useState} from "react";
import "./Tabs.scss";


export type ITabsProps = {
    tabName: string;
    tabContent: React.ReactNode;
}

const Tabs = ({tabs}: { tabs: ITabsProps[] }) => {
    const [currentTabIndex, updateTabIndex] = useState(0);

    return (
        <>
            <div className="tabs-container">
                {tabs.map((tab, index) =>
                    <button key={tab.tabName}
                            className={`tab_name ${index === currentTabIndex ? 'tab_name__selected' : ''}`}
                            onClick={() => updateTabIndex(index)}>{tab.tabName}</button>)
                }
            </div>
            {tabs[currentTabIndex].tabContent}
        </>
    );
};

export default Tabs;