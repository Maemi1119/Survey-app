import React from 'react';

const Text = (props) => {
    return(
        <input
        type={props.type}
        name={props.name}
        placeholder={props.placeholder}
        />
        );
};

export default Text;