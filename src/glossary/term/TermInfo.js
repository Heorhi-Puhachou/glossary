import React, {useEffect} from "react";
import "./TermInfo.css"
import {useSelector} from "react-redux";
import {useLocation, useNavigate} from "react-router-dom";

const TermInfo = (props) => {
    const labels = useSelector(state => state.labels);


    const terms = useSelector(state => state.terms);

    useEffect(() => {


    }, []);

    const term = terms.filter(
        item => item.id === props.termId)[0];

    const wrongSection = <div>
        <h2 className="headertekst">{labels.wrong_usage}</h2>
        <div className='term-info-block'>
            <div className="record-info">
                <div className="wrong-info">
                    {term.wrong}
                </div>
            </div>
        </div>
    </div>;


    const commentSection = <div>
        <div>
            return <h2 className="headertekst">{labels.comment}</h2>
            <div className='term-info-block'>
                <div className="record-info">
                    <div className="term-text">
                        {term.comment}
                    </div>
                </div>
            </div>
        </div>
    </div>;

    return (
        <div className="tab-content">
            <div className="term-stub-panel"/>
            <div className="term-info-panel">
                <h2 className="headertekst">{labels.term + ' № ' + props.termId}</h2>
                <div className='term-info-block'>
                    <div className="record-info">
                        <div className="term-text">
                            {term.originalValue + ' - ' + term.value}
                        </div>
                    </div>
                </div>
                {term.wrong && wrongSection}
                {term.comment && commentSection}
            </div>
            < div className="term-button-panel">
                <button className='term-back-button' onClick={() => props.resetSelectedItem()}>{labels.back}</button>
            </div>
        </div>
    );
};

export default TermInfo;