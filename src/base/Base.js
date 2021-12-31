import Glossary from '../glossary/Glossary';
import StyleGuide from '../styleguide/StyleGuide';
import LinksPage from '../links/LinksPage';
import './Base.css';
import {Route} from "react-router-dom";
import React, {useState} from 'react';
import {TARASK_TAG} from './constant';
import {StyleSelector} from '../glossary/StyleSelector';
import TabList from './TabList';

function Base() {
    const [style, setStyle] = useState(TARASK_TAG);

    const tabs = [
        {name: 'Гласарый', element: <Glossary style={style}/>, link: '/glossary'},
        {name: 'Правілы', element: <StyleGuide/>, link: '/styleguide'},
        {name: 'Спасылкі', element: <LinksPage/>, link: '/linkspage'},
    ];


    const [activeTab, setActiveTab] = useState(tabs[0].name);

    const onChangeActiveTab = (newActiveTabName) => {
        setActiveTab(newActiveTabName);
    };

    return (<div id="base">
        <div className="style">
            <StyleSelector style={style} setStyle={setStyle}/>
        </div>
        <div className="title">
            <div>Беларускі тэхнічны пераклад</div>
        </div>
        <TabList tabs={tabs} activeTabName={activeTab} onChangeActiveTab={onChangeActiveTab}/>
        {
            tabs.map(tab => {
                return <Route path={tab.link}>
                    {tab.element}
                </Route>
            })
        }
        <Route path='*'>
            <Glossary style={style}/>
        </Route>
    </div>);
}

export default Base;