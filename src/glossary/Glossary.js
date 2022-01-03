import React, {useEffect, useState} from 'react';
import {RecordsBlock} from './RecordsBlock';
import './Glossary.css';
import {PaginationPanel} from './PaginationPanel';
import SearchPanel from './SearchPanel';
import * as constants from '../base/constant';
import {Route, Switch, useParams} from 'react-router-dom';
import TermPage from "./TermPage";


function Glossary(props) {
  const urlParams = useParams();
  const countPerPage = 4;
  const [filteredGlosses, setFilteredGlosses] = useState([]);
  const [glosses, setGlosses] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const styleFromUrl = urlParams.style;
    if(styleFromUrl === constants.TARASK_TAG
        || styleFromUrl === constants.NARKAM_TAG
        || styleFromUrl === constants.LACINK_TAG) {
      props.setStyle(urlParams.style);
    }
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
      <Switch>
        <Route path='/glossary/terms/:id'>
          <TermPage/>
        </Route>
        <Route path='/*'>
          <SearchPanel onFilterChange={onFilterChange} />
          <RecordsBlock filteredGlosses={filteredGlosses}
                        style={props.style}
                        countPerPage={countPerPage}
                        currentPage={currentPage}/>
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