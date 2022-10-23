import React from 'react';
import Button from '@mui/material/Button';

export default function Modify({FunctionName}) {
    return(
        <Button variant="outlined" onClick={FunctionName}>変更する</Button>
    );
}