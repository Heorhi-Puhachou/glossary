import ReactDOM from 'react-dom';
import Base from './base/Base';
import {BrowserRouter} from "react-router-dom";
import React from "react";

ReactDOM.render(
    <BrowserRouter>
        <Base/>
    </BrowserRouter>
    ,
    document.getElementById('root'),
);
