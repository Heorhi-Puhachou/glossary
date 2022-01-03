import * as constants from '../base/constant';
import React from 'react';
import './Record.css';
import {NavLink, useLocation} from "react-router-dom";

export function Record(item, style) {
  const location = useLocation();

  let renderValue;
  if (style === constants.LACINK_TAG) {
    renderValue = item.lacink;
  } else if (style === constants.TARASK_TAG) {
    renderValue = item.tarask;
  } else {
    renderValue = item.narkam;
  }
  return (
    <NavLink className='record'
             to={`${location.pathname}/${item.id}`}
             key={item.id}>
      <div className="record-info">
        <div className="text-wrapper">
          {item.originalValue + ' - ' + renderValue.value}
        </div>
      </div>
    </NavLink>
  );
}