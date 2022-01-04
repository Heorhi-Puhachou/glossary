import Glossary from '../glossary/Glossary';
import StyleGuide from '../styleguide/StyleGuide';
import LinksPage from '../links/LinksPage';
import './Base.css';
import {Navigate, Route, Routes, useLocation} from "react-router-dom";
import React, {useState} from 'react';
import {LACINK_TAG, NARKAM_TAG} from './constant';
import {StyleSelector} from './StyleSelector';
import TabList from './TabList';
import TermPage from "../glossary/TermPage";
import {useDispatch, useSelector} from "react-redux";

function Base() {

    const style = useSelector(state => state.style);
    const dispatch = useDispatch();
    const location = useLocation();

    //http://localhost:3000/be-1959acad
    //                      be-1959acad - location.pathname.substring(1, 12)
    let initStyle = location.pathname.length > 9 ? location.pathname.substring(1, 12) : '';
    if (initStyle === NARKAM_TAG || initStyle === LACINK_TAG) {
        dispatch({type: initStyle});
    }

    const tabs = [
        {name: 'Гласарый', element: <Glossary/>, link: `/${style}/terms`},
        {name: 'Правілы', element: <StyleGuide/>, link: `/${style}/styleguide`},
        {name: 'Спасылкі', element: <LinksPage/>, link: `/${style}/linkspage`},
    ];


    const [activeTab, setActiveTab] = useState(tabs[0].name);

    const onChangeActiveTab = (newActiveTabName) => {
        setActiveTab(newActiveTabName);
    };

    return (<div id="base">
        <div className="style">
            <StyleSelector/>
        </div>
        <div className="title">
            <div>Беларускі тэхнічны пераклад</div>
        </div>
        <TabList tabs={tabs} activeTabName={activeTab} onChangeActiveTab={onChangeActiveTab}/>
        <Routes>
            {
                tabs.map(tab => {
                    return <Route key={tab.name}
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