import React from 'react';
import './SearchPanel.css';

function SearchPanel(props) {
  return (
    <div className="filter">
      <input type="text" onChange={props.onFilterChange} placeholder="увядзіце анг. тэрмін" />
    </div>
  );
}

export default SearchPanel;


