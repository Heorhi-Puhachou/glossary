import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { StyleSelector } from './style-selector';
import { Record } from './record';
import * as constants from './constant';

function List(props) {
  return (
    <ol>{props.items}</ol>
  );
}

function Glossary() {

  const [filteredGlosses, setFilteredGlosses] = useState([]);
  const [glosses, setGlosses] = useState([]);
  const [style, setStyle] = useState(constants.TARASK_TAG);

  useEffect(() => {
    fetch('https://raw.githubusercontent.com/Heorhi-Puhachou/excel_json_parser/main/glossary.json')
      .then(response => response.json())
      .then(jsonData => {
        setGlosses(jsonData);
        setFilteredGlosses(jsonData);
      });
  }, []);

  const records = filteredGlosses.map((item) => Record(item, style));

  return (
    <div id="outer" className="three-rows">
      <div id="inner" className="input">
        <input type="text" onChange={value => {
          setFilteredGlosses(glosses.filter(item => item.originalValue.includes(value.target.value)));
        }} />
      </div>
      <StyleSelector style={style} onChangeStyle={event => setStyle(event.target.value)} />
      <div id="inner-l" className="records">
        <List items={records} />
      </div>
    </div>
  );
}

// ========================================

ReactDOM.render(
  <Glossary />,
  document.getElementById('root'),
);
