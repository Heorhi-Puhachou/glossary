import * as constants from './constant';
import React from 'react';

export function Record(item, style) {
  let renderValue;
  if (style === constants.LACINK_TAG) {
    renderValue = item.lacinka;
  } else if (style === constants.TARASK_TAG) {
    renderValue = item.tarask;
  } else {
    renderValue = item.acad;
  }
  return (
    <li key={item.id}>
      <div className="orig">{item.originalValue}</div>
      <div className="value">{renderValue.value}</div>
      <div className="wrong">{renderValue.wrong}</div>
      <div className="comment">{renderValue.comment}</div>
    </li>
  );
}