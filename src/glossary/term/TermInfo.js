import React from "react";
import "./TermInfo.css"
import {useSelector} from "react-redux";

const TermInfo = (props) => {

    const terms = useSelector(state => state.terms);


    const term = terms.filter(
        item => item.id === props.termId)[0];
    return <div className="tab-content">
        <div className="term-stub-panel"/>

        <h2 className="headertekst">{'Тэрмін № '+props.termId}</h2>
            <div className="term-info-panel">
                <div className='term-info-block'>
                    <div className="record-info">
                        <div className="term-text">
                            {term.originalValue + ' - ' + term.value}
                        </div>
                    </div>
                </div>

                <h2 className="headertekst">Няправільнае ўжываньне</h2>
                <div className='term-info-block'>
                    <div className="record-info">
                        <div className="wrong-info">
                            {term.wrong}
                        </div>
                    </div>
                </div>

                <h2  className="headertekst">Камэнтар</h2>
                <div className='term-info-block'>
                    <div className="record-info">
                        <div className="term-text">
                            {term.comment}
                        </div>
                    </div>
                </div>
            </div>

            <div className="term-button-panel">
                <button className='term-back-button' onClick={() => props.resetSelectedItem()}>Назад</button>
            </div>



    </div>
};

export default TermInfo;