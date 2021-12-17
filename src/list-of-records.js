import { Record } from './record';
import React from 'react';

export function List(props) {
  return (
    <ol>{props.filteredGlosses.map((item) => Record(item, props.style))}</ol>
  );
}