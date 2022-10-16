import React from 'react';
import Title from '@/Components/Title';
import TextField from '@mui/material/TextField';

export default function Questions({title,label,value,placeholder,postData}) {
    return(
        <div>
          <Title title={title}/>
          <TextField label={label} placeholder={placeholder} value={value} variant="standard" onChange={postData}/>
        </div>
    );
}