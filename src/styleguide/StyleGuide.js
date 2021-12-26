import {useEffect, useState} from "react";
import Option from "../links/Option";
import RulesBlock from "./RulesBlock";
import "./StyleGuide.css";

function StyleGuide() {
    const [ruleGroups, setRuleGroups] = useState([]);
    const [selectedGroup, setSelectedGroup] = useState('');
    const [dropdownValue, setDropDownValue] = useState('');


    useEffect(() => {
        fetch('https://raw.githubusercontent.com/Heorhi-Puhachou/excel_json_parser/main/style.json')
            .then(response => response.json())
            .then(jsonData => {
                setRuleGroups(jsonData);
                setSelectedGroup(jsonData[0]);
            });
    }, []);


    const onGroupSelected = (event) => {
        const selectedGroupName = event.target.value;
        const filteredGroups = ruleGroups.filter(group => group.category === selectedGroupName);
        if (filteredGroups.length > 0) {
            setSelectedGroup(filteredGroups[0]);
            setDropDownValue(filteredGroups[0].category);
        }
    };


    return (
        <div className="rules-page">
            <div className="select-block">
                <select name="select" value={dropdownValue} onChange={onGroupSelected}>
                    {ruleGroups.map(group => Option(group.category))}
                </select>
            </div>
            <RulesBlock group={selectedGroup}/>
        </div>);
}

export default StyleGuide;