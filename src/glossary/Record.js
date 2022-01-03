import * as constants from '../base/constant';
import React from 'react';
import './Record.css';
import {Link, useRouteMatch} from "react-router-dom";

export function Record(item, style) {
  const match = useRouteMatch();

  let renderValue;
  if (style === constants.LACINK_TAG) {
    renderValue = item.lacink;
  } else if (style === constants.TARASK_TAG) {
    renderValue = item.tarask;
  } else {
    renderValue = item.narkam;
  }
  return (
    <Link to={`${match.path}/${item.id}`} key={item.id} className="record">
      <div className="record-info">
        <div className="text-wrapper">
          {item.originalValue + ' - ' + renderValue.value}
        </div>
      </div>
    </Link>
  );
}