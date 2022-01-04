import React, {useEffect, useState} from "react";
import Option from "../links/Option";
import RulesBlock from "./RulesBlock";
import "./StyleGuide.css";
import {useDispatch, useSelector} from "react-redux";
import {LACINK_TAG, NARKAM_TAG, TARASK_TAG} from "../base/constant";
import Preloader from "../base/Preloader";

function StyleGuide() {
    const style = useSelector(state => state.style);
    const ruleGroups = useSelector(state => state.ruleGroups);
    const dispatch = useDispatch();


    const [selectedGroup, setSelectedGroup] = useState('');
    const [dropdownValue, setDropDownValue] = useState('');
    const [loading, setLoading] = useState(true);
    const stopLoading = () => {
        setLoading(false);
    };


    useEffect(() => {
        if (ruleGroups === undefined || ruleGroups.length === 0) {
            const rulesMap = new Map();
            fetch('https://raw.githubusercontent.com/Heorhi-Puhachou/excel_json_parser/main/generated/style/1959acad.json')
                .then(response => response.json())
                .then(jsonData => {
                    rulesMap.set(NARKAM_TAG, jsonData);
                    fetch('https://raw.githubusercontent.com/Heorhi-Puhachou/excel_json_parser/main/generated/style/lacinka.json')
                        .then(response => response.json())
                        .then(jsonData => {
                            rulesMap.set(LACINK_TAG, jsonData);
                            fetch('https://raw.githubusercontent.com/Heorhi-Puhachou/excel_json_parser/main/generated/style/tarask.json')
                                .then(response => response.json())
                                .then(jsonData => {
                                    rulesMap.set(TARASK_TAG, jsonData);
                                    dispatch({type: 'addR', rulesMap: rulesMap});
                                    setSelectedGroup(rulesMap.get(style)[0]);
                                    setTimeout(stopLoading, 500);
                                });
                        });
                });

        } else {
            setTimeout(stopLoading, 500);
            setSelectedGroup(ruleGroups[0]);
        }

    }, []);

    useEffect(() => {
        setSelectedGroup(ruleGroups[0]);
    }, [ruleGroups]);


    const onGroupSelected = (event) => {
        const selectedGroupName = event.target.value;
        const filteredGroups = ruleGroups.filter(group => group.category === selectedGroupName);
        if (filteredGroups.length > 0) {
            setSelectedGroup(filteredGroups[0]);
            setDropDownValue(filteredGroups[0].category);
        }
    };

    if (loading) {
        return <Preloader/>;
    }

    return (
        <div className="rules-page">
            <div className="select-block">
                <select name="select" value={dropdownValue} onChange={onGroupSelected}>
                    {ruleGroups.map(group => Option(group.category))}
                </select>
            </div>
            <div className="overflow-pane">
                <RulesBlock group={selectedGroup}/>
            </div>
        </div>);
}

export default StyleGuide;