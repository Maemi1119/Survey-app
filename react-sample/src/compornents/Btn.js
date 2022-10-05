import React from 'react';

const Btn = (props) => {
    return(
        <button type="button" id={props.id}>{props.btnName}</button>
        );
};

export default Btn;