import * as constants from '../base/constant';
import React from 'react';
import Card from '../base/Card';
import './Record.css';

export function Record(item, style) {
  let renderValue;
  if (style === constants.LACINK_TAG) {
    renderValue = item.lacink;
  } else if (style === constants.TARASK_TAG) {
    renderValue = item.tarask;
  } else {
    renderValue = item.narkam;
  }
  return (
    <div key={item.id} className="record">
      <div className="record-info">
        <div className="text-wrapper">
          {item.originalValue + ' - ' + renderValue.value}
        </div>
      </div>
    </div>
  );
}