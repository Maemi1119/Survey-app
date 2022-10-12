import React from 'react';
import Title from '@/Components/Title';
import TextField from '@mui/material/TextField';

export default function Letter({id}) {
    return(
        <div className='hidden' id='letter{id}'>
           <TextField label="最小字数" placeholder='1' variant="outlined"/>
           <TextField label="最大字数" placeholder='1000' variant="outlined"/>
        </div>
        );
}