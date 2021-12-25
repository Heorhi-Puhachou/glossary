import React, { useEffect, useState } from 'react';
import { RecordsBlock } from './RecordsBlock';
import './Glossary.css';
import { PaginationPanel } from './PaginationPanel';
import SearchPanel from './SearchPanel';

function Glossary(props) {
  const countPerPage = 4;
  const [filteredGlosses, setFilteredGlosses] = useState([]);
  const [glosses, setGlosses] = useState([]);
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
    console.log(1);
    setFilteredGlosses(
      glosses.filter(
        item => item.originalValue.toLowerCase().includes(value.toLowerCase())));
    console.log(2);
  };

  const onFilterChange = value => {
    filterGlosses(value);
    resetCurrentPage();
  };

  return (
    <div className="tab-content">
      <SearchPanel onFilterChange={onFilterChange} />
      <RecordsBlock filteredGlosses={filteredGlosses}
                    style={props.style}
                    countPerPage={countPerPage}
                    currentPage={currentPage}/>
      <PaginationPanel filteredGlosses={filteredGlosses}
                       countPerPage={countPerPage}
                       currentPage={currentPage}
                       setCurrentPage={setCurrentPage} />
    </div>
  );
}

export default Glossary;