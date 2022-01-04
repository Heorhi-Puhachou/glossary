import Glossary from '../glossary/Glossary';
import StyleGuide from '../styleguide/StyleGuide';
import LinksPage from '../links/LinksPage';
import './Base.css';
import {Route, Routes, Navigate, useNavigate, useLocation, useParams} from "react-router-dom";
import React, {useState} from 'react';
import {LACINK_TAG, NARKAM_TAG, TARASK_TAG} from './constant';
import {StyleSelector} from './StyleSelector';
import TabList from './TabList';
import TermPage from "../glossary/TermPage";

function Base() {

    const navigate = useNavigate();
    const location = useLocation();

    //http://localhost:3000/be-1959acad
    //                      be-1959acad - location.pathname.substring(1, 12)
    let initStyle = location.pathname.length > 9 ? location.pathname.substring(1, 12) : '';
    if (initStyle !== NARKAM_TAG && initStyle !== LACINK_TAG) {
        initStyle = TARASK_TAG;
    }

    const [style, setStyle] = useState(initStyle);


    const onChangeStyle = (newStyle) => {
        const currentPath = location.pathname;
        const newLocation = currentPath.replace(style, newStyle)+location.search;
        navigate(newLocation);
        setStyle(newStyle);
    };

    const tabs = [
        {name: 'Гласарый', element: <Glossary style={style} setStyle={setStyle}/>, link: `/${style}/terms`},
        {name: 'Правілы', element: <StyleGuide/>, link: `/${style}/styleguide`},
        {name: 'Спасылкі', element: <LinksPage/>, link: `/${style}/linkspage`},
    ];


    const [activeTab, setActiveTab] = useState(tabs[0].name);

    const onChangeActiveTab = (newActiveTabName) => {
        setActiveTab(newActiveTabName);
    };

    return (<div id="base">
        <div className="style">
            <StyleSelector style={style} onChangeStyle={onChangeStyle}/>
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