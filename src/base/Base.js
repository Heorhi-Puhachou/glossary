import Glossary from '../glossary/Glossary';
import StyleGuide from '../styleguide/StyleGuide';
import LinksPage from '../links/LinksPage';
import './Base.css';
import {Route, Switch, Redirect, useHistory} from "react-router-dom";
import React, {useState} from 'react';
import {TARASK_TAG} from './constant';
import {StyleSelector} from '../glossary/StyleSelector';
import TabList from './TabList';

function Base() {
    const [style, setStyle] = useState(TARASK_TAG);

    const history = useHistory();

    const onChangeStyle = (newStyle) => {
        const current = history.location;
        const newLocation = current.pathname.replace(style, newStyle);
        history.push(newLocation);
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
                <Redirect to={`/${TARASK_TAG}`}/>
            </Route>
        </Switch>
    </div>);
}

export default Base;