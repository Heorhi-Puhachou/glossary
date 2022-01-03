import React, {useEffect, useState} from 'react';
import {RecordsBlock} from './RecordsBlock';
import './Glossary.css';
import {PaginationPanel} from './PaginationPanel';
import SearchPanel from './SearchPanel';
import {Route, Switch, useHistory, useLocation} from 'react-router-dom';
import TermPage from "./TermPage";


function Glossary(props) {
  const countPerPage = 4;
  const [filteredGlosses, setFilteredGlosses] = useState([]);
  const [glosses, setGlosses] = useState([]);

  const history = useHistory();
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
        setFilteredGlosses(jsonData);
      return jsonData;
      });
  }, []);

  const resetCurrentPage = () => {
    setCurrentPage(1);
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
    history.push(`/${props.style}/terms?filter=${value}&page=${currentPage}`);
  };

  return (
    <div className="tab-content">
      <Switch>
        <Route path='/:style/terms/:id'>
          <TermPage/>
        </Route>
        <Route path='/*'>
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
                           setCurrentPage={setCurrentPage} />
        </Route>
      </Switch>
    </div>
  );
}

export default Glossary;