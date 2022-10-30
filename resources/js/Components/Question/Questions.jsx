import React from 'react';
import Title from '@/Components/Title';
import TextField from '@mui/material/TextField';

export default function Questions({title,label,value,placeholder,postData,name,required}) {
    return(
        <div>
            <Title title={title} required={required} />
            <div className="w-1/2">
                <TextField fullWidth name={name} label={label} placeholder={placeholder} value={value} variant="standard" onChange={postData}/>
            </div>
        </div>
    );
}