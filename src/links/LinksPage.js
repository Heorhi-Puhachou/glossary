import {useEffect, useState} from "react";

function LinksPage() {

    const [linkGroups, setLinkGroups] = useState([]);

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/Heorhi-Puhachou/excel_json_parser/main/links.json')
            .then(response => response.json())
            .then(jsonData => {
                setLinkGroups(jsonData);
            });
    }, []);

    return <div>{linkGroups.map(group => group.groupName)}</div>;
}

export default LinksPage;