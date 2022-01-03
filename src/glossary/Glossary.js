import React, {useEffect, useState} from 'react';
import {RecordsBlock} from './RecordsBlock';
import './Glossary.css';
import {PaginationPanel} from './PaginationPanel';
import SearchPanel from './SearchPanel';
import {useLocation, useNavigate} from 'react-router-dom';


function Glossary(props) {
  const countPerPage = 4;
  const [filteredGlosses, setFilteredGlosses] = useState([]);
  const [glosses, setGlosses] = useState([]);


  const navigate = useNavigate();
  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);
  const filter = queryParams.get('filter') === null?'':queryParams.get('filter');
  const page = queryParams.get('page') === null ? 1:queryParams.get('page');

  const [currentPage, setCurrentPage] = useState(page);
  const [filterValue, setFilterValue] = useState(filter);



  useEffect(() => {
    fetch('https://raw.githubusercontent.com/Heorhi-Puhachou/excel_json_parser/main/glossary.json')
      .then(response => response.json())
      .then(jsonData => {
        setGlosses(jsonData);
      });
  }, []);

  useEffect( ()=>{
    filterGlosses(filterValue);
  },[glosses]);

  const updatePage = (page)=>{
    setCurrentPage(+page);
    navigate(`${location.pathname}?filter=${filterValue}&page=${page}`);
  };

  const resetCurrentPage = () => {
    updatePage(1);
  };

  const filterGlosses = value => {
    setFilteredGlosses(
      glosses.filter(
        item => item.originalValue.toLowerCase().includes(value.toLowerCase())));
  };

  const onFilterChange = value => {
    filterGlosses(value);
    resetCurrentPage();
    setFilterValue(value);
    navigate(`${location.pathname}?filter=${value}&page=1`);
  };

  return (
    <div className="tab-content">
          <SearchPanel onFilterChange={onFilterChange}
                       filterValue={filterValue}/>
          <RecordsBlock filteredGlosses={filteredGlosses}
                        style={props.style}
                        countPerPage={countPerPage}
                        currentPage={currentPage}
                        />
          <PaginationPanel filteredGlosses={filteredGlosses}
                           countPerPage={countPerPage}
                           currentPage={currentPage}
                           setCurrentPage={updatePage} />
    </div>
  );
}

export default Glossary;