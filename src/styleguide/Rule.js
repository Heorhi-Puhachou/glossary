import "./Rule.css"
import React from "react";

const Rule = (description, example) => {


    return (
        <div key={description.substring(0, 10)} className="rule-record">
            <div className="rule-info">
                    <div className="rule-record">{description}</div>
                {example !== '' && (
                    <div key={example} className="rule-wrapper">
                        <div className="example rule-record">{example}</div>
                    </div>)}
            </div>
        </div>
    );

};

export default Rule;