import Card from './Card';
import { StyleSelector } from './StyleSelector';
import React from 'react';

function SearchPanel(props) {

  const onFilterChange = value => {
    props.resetCurrentPage();
    props.filterGlosses(value);
  };

  return <Card>
    <div id="inner" className="input">
      <input type="text" onChange={onFilterChange} />
    </div>
    <StyleSelector style={props.style} setStyle={props.setStyle} />
  </Card>;
}

export default SearchPanel;