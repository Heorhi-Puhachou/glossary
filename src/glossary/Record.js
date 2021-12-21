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
    <Card key={item.id} className="record">
      <div className="orig">{item.originalValue + ' - ' + renderValue.value}</div>
      <div className="wrong">{renderValue.wrong}</div>
      <div className="comment">{renderValue.comment}</div>
    </Card>
  );
}