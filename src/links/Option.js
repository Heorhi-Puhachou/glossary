import React from 'react';

const Option = (value) => {
    return (<option key={value} value={value}>{value}</option>);
};

export default Option;