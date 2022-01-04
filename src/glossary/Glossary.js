import React, {useEffect, useState} from 'react';
import {RecordsBlock} from './RecordsBlock';
import './Glossary.css';
import {PaginationPanel} from './PaginationPanel';
import SearchPanel from './SearchPanel';
import {useLocation, useNavigate} from 'react-router-dom';
import {LACINK_TAG, NARKAM_TAG, TARASK_TAG} from "../base/constant";
import {useDispatch, useSelector} from "react-redux";


function Glossary() {

  const style = useSelector(state => state.style);
  const terms = useSelector(state => state.terms);
  const dispatch = useDispatch();


  const countPerPage = 4;
  const [filteredTerms, setFilteredTerms] = useState([]);


  const navigate = useNavigate();
  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);
  const filter = queryParams.get('filter') === null?'':queryParams.get('filter');
  const page = queryParams.get('page') === null ? 1:queryParams.get('page');

  const [currentPage, setCurrentPage] = useState(page);
  const [filterValue, setFilterValue] = useState(filter);



  useEffect(() => {
    if (terms === undefined || terms.length === 0) {
      const termsMap = new Map();
      fetch('https://raw.githubusercontent.com/Heorhi-Puhachou/excel_json_parser/main/generated/glossary/1959acad.json')
          .then(response => response.json())
          .then(jsonData => {
            termsMap.set(NARKAM_TAG, jsonData);
            fetch('https://raw.githubusercontent.com/Heorhi-Puhachou/excel_json_parser/main/generated/glossary/lacinka.json')
                .then(response => response.json())
                .then(jsonData => {
                  termsMap.set(LACINK_TAG, jsonData);
                  fetch('https://raw.githubusercontent.com/Heorhi-Puhachou/excel_json_parser/main/generated/glossary/tarask.json')
                      .then(response => response.json())
                      .then(jsonData => {
                        termsMap.set(TARASK_TAG, jsonData);
                        dispatch({type: 'addT', termsMap: termsMap});
                        setFilteredTerms(termsMap.get(style)[0]);
                      });
                });
          });

    } else {
      setFilteredTerms(terms);
    }

  }, []);


  useEffect( ()=>{
    filterGlosses(filterValue);
  },[terms]);

  const updatePage = (page)=>{
    setCurrentPage(+page);
    navigate(`${location.pathname}?filter=${filterValue}&page=${page}`);
  };

  const resetCurrentPage = () => {
    updatePage(1);
  };

  const filterGlosses = value => {
    setFilteredTerms(
      terms.filter(
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
          <RecordsBlock filteredGlosses={filteredTerms}
                        countPerPage={countPerPage}
                        currentPage={currentPage}
                        />
          <PaginationPanel filteredGlosses={filteredTerms}
                           countPerPage={countPerPage}
                           currentPage={currentPage}
                           setCurrentPage={updatePage} />
    </div>
  );
}

export default Glossary;