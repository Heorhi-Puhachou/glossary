import Glossary from '../glossary/Glossary';
import StyleGuide from '../styleguide/StyleGuide';
import LinksPage from '../links/LinksPage';
import './Base.css';
import Converter from '../converter/Converter';
import React, { useState } from 'react';
import { TARASK_TAG } from './constant';
import { StyleSelector } from '../glossary/StyleSelector';
import TabList from './TabList';

function Base() {
  const [style, setStyle] = useState(TARASK_TAG);

  const tabs = new Map();
  tabs.set('Гласарый', <Glossary style={style} />);
  tabs.set('Правілы', <StyleGuide />);
  tabs.set('Спасылкі', <LinksPage />);
  tabs.set('Канвэртар', <Converter />);

  const tabNames = Array.from(tabs.keys());
  const [activeTab, setActiveTab] = useState(tabNames[0]);

  const onChangeActiveTab = (newActiveTabName) => {
    setActiveTab(newActiveTabName);
  };

  const getContentForTab = (tabName) => {
    return tabs.get(tabName);
  };

  return (<div id="base">
    <div className="style">
      <StyleSelector style={style} setStyle={setStyle} />
    </div>
    <div className="title">
      <div>Таварыства перакладчыкаў</div>
    </div>
    <TabList tabNames={tabNames} activeTabName={activeTab} onChangeActiveTab={onChangeActiveTab} />
    {getContentForTab(activeTab)}
  </div>);
}

export default Base;