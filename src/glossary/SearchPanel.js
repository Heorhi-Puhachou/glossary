import Card from '../base/Card';
import { StyleSelector } from './StyleSelector';
import React from 'react';
import './SearchPanel.css';

function SearchPanel(props) {

  const onFilterChange = value => {
    props.resetCurrentPage();
    props.filterGlosses(value);
  };

  return <Card className="search-glossary">
    <div id="inner" className="input">
      <input type="text" onChange={onFilterChange} placeholder="увядзіце анг. тэрмін" />
    </div>
    <StyleSelector style={props.style} setStyle={props.setStyle} />
  </Card>;
}

export default SearchPanel;