import Glossary from '../glossary/Glossary';
import StyleGuide from '../styleguide/StyleGuide';
import LinksPage from '../links/LinksPage';
import './Base.css';
import {Route} from "react-router-dom";
import React, {useState} from 'react';
import {TARASK_TAG} from './constant';
import {StyleSelector} from '../glossary/StyleSelector';
import TabList from './TabList';
import Switch from "react-router-dom/es/Switch";

function Base() {
    const [style, setStyle] = useState(TARASK_TAG);

    const tabs = [
        {name: 'Гласарый', element: <Glossary style={style} setStyle={setStyle}/>, link: '/glossary'},
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
        <Switch>
            {
                tabs.map(tab => {
                    return <Route key={tab.name} path={tab.link}>
                        {tab.element}
                    </Route>
                })
            }
            <Route path='/:style'>
                {tabs[0].element}
            </Route>
            <Route path='/*'>
                {tabs[0].element}
            </Route>
        </Switch>
    </div>);
}

export default Base;