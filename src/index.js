import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { StyleSelector } from './style-selector';
import { TARASK_TAG } from './constant';
import { List } from './list-of-records';

function Glossary() {
  const [filteredGlosses, setFilteredGlosses] = useState([]);
  const [glosses, setGlosses] = useState([]);
  const [style, setStyle] = useState(TARASK_TAG);

  useEffect(() => {
    fetch('https://raw.githubusercontent.com/Heorhi-Puhachou/excel_json_parser/main/glossary.json')
      .then(response => response.json())
      .then(jsonData => {
        setGlosses(jsonData);
        setFilteredGlosses(jsonData);
      });
  }, []);

  const onFilterChange = value => {
    setFilteredGlosses(
      glosses.filter(
        item => item.originalValue.includes(value.target.value)));
  };

  return (
    <div id="outer" className="three-rows">
      <div id="inner" className="input">
        <input type="text" onChange={onFilterChange} />
      </div>
      <StyleSelector style={style} setStyle={setStyle} />
      <div id="inner-l" className="records">
        <List filteredGlosses={filteredGlosses} style={style} />
      </div>
    </div>
  );
}

ReactDOM.render(
  <Glossary />,
  document.getElementById('root'),
);
