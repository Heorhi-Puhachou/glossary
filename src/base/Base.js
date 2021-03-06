import Glossary from '../glossary/Glossary';
import StyleGuide from '../styleguide/StyleGuide';
import LinksPage from '../links/LinksPage';
import './Base.css';
import {Navigate, Route, Routes, useLocation} from "react-router-dom";
import React, {useEffect, useState} from 'react';
import {LACINK_TAG, NARKAM_TAG, TARASK_TAG} from './constant';
import {StyleSelector} from './StyleSelector';
import TabList from './TabList';
import {useDispatch, useSelector} from "react-redux";

function Base() {

    const style = useSelector(state => state.style);
    const labels = useSelector(state => state.labels);
    const dispatch = useDispatch();
    const location = useLocation();

    useEffect(() => {
        //http://localhost:3000/narkam
        //                      narkam - location.pathname.substring(1, 7)
        let initStyle = location.pathname.length > 6 ? location.pathname.substring(1, 7) : '';
        if (initStyle === NARKAM_TAG) {
            dispatch({type: NARKAM_TAG});
        }
        if (initStyle === LACINK_TAG) {
            dispatch({type: LACINK_TAG});
        }
        if (initStyle === TARASK_TAG) {
            dispatch({type: TARASK_TAG});
        }

    }, []);


    const tabs = [
        {id: '1', name: labels.glossary, element: <Glossary/>, link: `/${style}/terms`},
        {id: '2', name: labels.rules, element: <StyleGuide/>, link: `/${style}/styleguide`},
        {id: '3', name: labels.links, element: <LinksPage/>, link: `/${style}/linkspage`},
    ];

    let initTabId = tabs[0].id;
    if (location.pathname.includes('styleguide')) {
        initTabId = '2';
    }
    if (location.pathname.includes('linkspage')) {
        initTabId = '3';
    }


    const [activeTabId, setActiveTabId] = useState(initTabId);

    const onChangeActiveTab = (newActiveTabName) => {
        setActiveTabId(newActiveTabName);
    };

    return (
        <div id="base" className="display-linebreak">
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
                <Route path="/narkam" element={<Navigate to={`/narkam/terms`}/>}/>
                <Route path="/lacink" element={<Navigate to={`/lacink/terms`}/>}/>
                <Route path="/tarask" element={<Navigate to={`/tarask/terms`}/>}/>
                <Route path="" element={<Navigate to={`${style}/terms`}/>}/>
            </Routes>
        </div>);
}

export default Base;