import React, { useEffect, useState } from 'react';
import { TARASK_TAG } from '../base/constant';
import SearchPanel from './SearchPanel';
import { RecordsBlock } from './RecordsBlock';

function Glossary() {
  const [filteredGlosses, setFilteredGlosses] = useState([]);
  const [glosses, setGlosses] = useState([]);
  const [style, setStyle] = useState(TARASK_TAG);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    fetch('https://raw.githubusercontent.com/Heorhi-Puhachou/excel_json_parser/main/glossary.json')
      .then(response => response.json())
      .then(jsonData => {
        setGlosses(jsonData);
        setFilteredGlosses(jsonData);
      });
  }, []);

  const resetCurrentPage = () => {
    setCurrentPage(1);
  };

  const filterGlosses = value => {
    setFilteredGlosses(
      glosses.filter(
        item => item.originalValue.includes(value.target.value)));
  };

  return (
    <div className="tab-block">
      <SearchPanel style={style}
                   setStyle={setStyle}
                   filterGlosses={filterGlosses}
                   resetCurrentPage={resetCurrentPage} />
      <RecordsBlock filteredGlosses={filteredGlosses}
                    style={style}
                    countPerPage={4}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage} />
    </div>
  );
}

export default Glossary;