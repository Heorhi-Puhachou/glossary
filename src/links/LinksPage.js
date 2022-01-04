import React, {useEffect, useState} from "react";
import Option from "./Option";
import LinksBlock from "./LinksBlock";
import "./LinksPage.css"
import {LACINK_TAG, NARKAM_TAG, TARASK_TAG} from "../base/constant";
import {useDispatch, useSelector} from "react-redux";
import Preloader from "../base/Preloader";

function LinksPage() {

    const style = useSelector(state => state.style);
    const linkGroups = useSelector(state => state.linkGroups);
    const dispatch = useDispatch();


    const [selectedGroup, setSelectedGroup] = useState('');
    const [dropdownValue, setDropDownValue] = useState('');
    const [loading, setLoading] = useState(true);
    const stopLoading = () => {
        setLoading(false);
    };



    useEffect(() => {
        if (linkGroups === undefined || linkGroups.length === 0) {
            const linksMap = new Map();
            fetch('https://raw.githubusercontent.com/Heorhi-Puhachou/excel_json_parser/main/generated/links/1959acad.json')
                .then(response => response.json())
                .then(jsonData => {
                    linksMap.set(NARKAM_TAG, jsonData);
                    fetch('https://raw.githubusercontent.com/Heorhi-Puhachou/excel_json_parser/main/generated/links/lacinka.json')
                        .then(response => response.json())
                        .then(jsonData => {
                            linksMap.set(LACINK_TAG, jsonData);
                            fetch('https://raw.githubusercontent.com/Heorhi-Puhachou/excel_json_parser/main/generated/links/tarask.json')
                                .then(response => response.json())
                                .then(jsonData => {
                                    linksMap.set(TARASK_TAG, jsonData);
                                    dispatch({type: 'addL', linksMap: linksMap});
                                    setSelectedGroup(linksMap.get(style)[0]);
                                    setTimeout(stopLoading, 500);
                                });
                        });
                });

        } else {
            setTimeout(stopLoading, 500);
            setSelectedGroup(linkGroups[0]);
        }

    }, []);

    useEffect(() => {
        setSelectedGroup(linkGroups[0]);
    }, [linkGroups]);


    const onGroupSelected = (event) => {
        const selectedGroupName = event.target.value;
        const filteredGroups = linkGroups.filter(group => group.groupName === selectedGroupName);
        if (filteredGroups.length > 0) {
            setSelectedGroup(filteredGroups[0]);
            setDropDownValue(filteredGroups[0].groupName);
        }
    };

    if (loading) {
        return <Preloader/>;
    }

    return (
        <div className="links-page">
            <div className="select-block">
                <select name="select" value={dropdownValue} onChange={onGroupSelected}>
                    {linkGroups.map(group => Option(group.groupName))}
                </select>
            </div>
            <LinksBlock group={selectedGroup}/>
        </div>);
}

export default LinksPage;