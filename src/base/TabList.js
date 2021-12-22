import React from 'react';

import './TabList.css';

function TabList(props) {
  ;

  return (
    <div className="tab-list">
      {props.tabNames.map(tabName => {
        let classes = 'tab-list-item';
        if (tabName === props.activeTabName) {
          classes = classes + ' tab-list-active';
        }
        return <div className={classes} onClick={() => props.onChangeActiveTab(tabName)}>
          <div className="tab-text-wrapper">
            {tabName}
          </div>
        </div>;
      })
      }
    </div>
  );
}

export default TabList;
