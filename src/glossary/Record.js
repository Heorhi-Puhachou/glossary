import React from 'react';
import './Record.css';
import {NavLink, useLocation} from "react-router-dom";

export function Record(item) {
    const location = useLocation();

    return (
        <NavLink className='record'
                 to={`${location.pathname}/${item.id}`}
                 key={item.id}>
            <div className="record-info">
                <div className="text-wrapper">
                    {item.originalValue + ' - ' + item.value}
                </div>
            </div>
        </NavLink>
    );
}