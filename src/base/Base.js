import Glossary from '../glossary/Glossary';
import StyleGuide from '../styleguide/StyleGuide';
import LinksPage from '../links/LinksPage';
import './Base.css';
import {Route, Routes, Navigate, useNavigate, useLocation} from "react-router-dom";
import React, {useState} from 'react';
import {TARASK_TAG} from './constant';
import {StyleSelector} from '../glossary/StyleSelector';
import TabList from './TabList';
import TermPage from "../glossary/TermPage";

function Base() {
    const [style, setStyle] = useState(TARASK_TAG);

    const navigate = useNavigate();
    const location = useLocation();

    const onChangeStyle = (newStyle) => {
        const currentPath = location.pathname;
        const newLocation = currentPath.replace(style, newStyle);
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
                    return <Route key={tab.name} path={tab.link} element={tab.element}/>
                })
            }
            <Route path={`/${style}/terms/:id`} element={<TermPage/>}/>
            <Route path='/:style' element= {tabs[0].element}/>
            <Route path='*' element= {tabs[0].element}/>} />
        </Routes>
    </div>);
}

export default Base;