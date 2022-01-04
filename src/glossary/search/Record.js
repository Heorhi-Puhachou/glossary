import React from 'react';
import './Record.css';
import {NavLink, useLocation} from "react-router-dom";

export function Record(item, setSelectedItem) {
    const location = useLocation();

    return (
        <div className='record'

             key={item.id}>
            <button onClick={() => setSelectedItem(item.id)} className="record-info">
                <div className="text-wrapper">
                    {item.originalValue + ' - ' + item.value}
                </div>
            </button>
        </div>
    );
}