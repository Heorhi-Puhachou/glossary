import React from 'react';

import './TabList.css';
import {Link} from "react-router-dom";

function TabList(props) {
    ;

    return (
        <div className="tab-list">
            {props.tabs.map(tab => {
                let classes = 'tab-list-item';
                if (tab.name === props.activeTabName) {
                    classes = classes + ' tab-list-active';
                }
                return <div key={tab.name} className={classes} onClick={() => props.onChangeActiveTab(tab.name)}>
                    <Link to={tab.link} className="tab-text-wrapper">
                        {tab.name}
                    </Link>
                </div>;
            })
            }
        </div>
    );
}

export default TabList;
