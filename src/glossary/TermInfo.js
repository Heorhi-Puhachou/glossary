import React from "react";

const TermInfo = (props)=>{
    return <div className="tab-content">
        {props.term.id}
        <button onClick={() => props.resetSelectedItem()}>Назад</button>
    </div>
};

export default TermInfo;