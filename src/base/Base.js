import Glossary from '../glossary/Glossary';
import StyleGuide from '../styleguide/StyleGuide';
import LinksPage from '../links/LinksPage';
import './Base.css';
import {Navigate, Route, Routes, useLocation} from "react-router-dom";
import React, {useEffect, useState} from 'react';
import {LACINK_TAG, NARKAM_TAG} from './constant';
import {StyleSelector} from './StyleSelector';
import TabList from './TabList';
import TermPage from "../glossary/TermPage";
import {useDispatch, useSelector} from "react-redux";

function Base() {

    const style = useSelector(state => state.style);
    const labels = useSelector(state => state.labels);
    const dispatch = useDispatch();
    const location = useLocation();



    //http://localhost:3000/be-1959acad
    //                      be-1959acad - location.pathname.substring(1, 12)
    let initStyle = location.pathname.length > 9 ? location.pathname.substring(1, 12) : '';
    if (initStyle === NARKAM_TAG) {
        dispatch({type: NARKAM_TAG});
    }
    if(initStyle.includes(LACINK_TAG)) {
        dispatch({type: LACINK_TAG});
    }

    const tabs = [
        {id: '1', name: labels.glossary, element: <Glossary/>, link: `/${style}/terms`},
        {id: '2', name: labels.rules, element: <StyleGuide/>, link: `/${style}/styleguide`},
        {id: '3', name: labels.links, element: <LinksPage/>, link: `/${style}/linkspage`},
    ];


    const [activeTabId, setActiveTabId] = useState(tabs[0].id);

    const onChangeActiveTab = (newActiveTabName) => {
        setActiveTabId(newActiveTabName);
    };

    return (<div id="base">
        <div className="style">
            <StyleSelector/>
        </div>
        <div className="title">
            <div>{labels.title}</div>
        </div>
        <TabList tabs={tabs} activeTabId={activeTabId} onChangeActiveTab={onChangeActiveTab}/>
        <Routes>
            {
                tabs.map(tab => {
                    return <Route key={tab.id}
                                  path={tab.link}
                                  element={tab.element}/>
                })
            }
            <Route path={`/${style}/terms/:id`} element={<TermPage/>}/>
            <Route path="/:style" element={<Navigate to={`/:style/terms`}/>}/>
            <Route path="*" element={<Navigate to={tabs[0].link}/>}/>
        </Routes>
    </div>);
}

export default Base;