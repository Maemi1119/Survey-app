import React from 'react';
import Title from '@/Components/Title';
import TextField from '@mui/material/TextField';

export default function Questions({id,title,label,value,placeholder}) {
    return(
        <div id={id}>
          <Title title={title}/>
          <TextField label={label} placeholder={placeholder} value={value} variant="standard"/>
        </div>
        );
}