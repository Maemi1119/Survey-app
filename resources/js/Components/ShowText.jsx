import React from 'react';
import Typography from '@mui/material/Typography';

export default function ShowText({value,content1,content2}) {
    return(
        {value}=== 1 ? <Typography variant="p">{content1}</Typography> : <Typography variant="p">{content2}</Typography>
    );
};