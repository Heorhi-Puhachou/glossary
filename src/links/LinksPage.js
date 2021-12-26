import {useEffect, useState} from "react";
import Option from "./Option";
import Link from "./Link";
import LinksBlock from "./LinksBlock";
import "./LinksPage.css"

function LinksPage() {

    const [linkGroups, setLinkGroups] = useState([]);
    const [selectedGroup, setSelectedGroup] = useState('');
    const [dropdownValue, setDropDownValue] = useState('');


    useEffect(() => {
        fetch('https://raw.githubusercontent.com/Heorhi-Puhachou/excel_json_parser/main/links.json')
            .then(response => response.json())
            .then(jsonData => {
                setLinkGroups(jsonData);
                setSelectedGroup(jsonData[0]);
            });
    }, []);


    const onGroupSelected = (event) => {
        const selectedGroupName = event.target.value;
        const filteredGroups = linkGroups.filter(group => group.groupName === selectedGroupName);
        if (filteredGroups.length > 0) {
            setSelectedGroup(filteredGroups[0]);
            setDropDownValue(filteredGroups[0].groupName);
        }
    };


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