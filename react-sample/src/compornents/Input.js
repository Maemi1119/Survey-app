import React from 'react';

const Input = (props) => {
    return(
        <input
        type={props.type}
        name={props.name}
        value={props.value}
        id={props.id}
        />
        );
};

export default Input;