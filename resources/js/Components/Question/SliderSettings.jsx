import React from 'react';
import Title from '@/Components/Title';
import TextField from '@mui/material/TextField';

export default function SliderSettings({id}) {
    return(
        <div className='hidden' id="slider{id}">
          <TextField label="最小値" placeholder='1' variant="standard"/>
          <TextField label="最大値" placeholder='100' variant="standard"/>
          <TextField label="左" placeholder='低い' variant="standard"/>
          <TextField label="右" placeholder='高い' variant="standard"/>
        </div>
        );
}