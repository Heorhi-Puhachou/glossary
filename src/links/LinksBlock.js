import React from 'react';
import Link from "./Link";
import "./LinksBlock.css"

const LinksBlock = (props) => {

    if (props.group) {
        return (
            <div className="links-block">
                {props.group.links.map(link => Link(link.description, link.url))}
            </div>
        );
    } else {
        return null;
    }
};

export default LinksBlock;