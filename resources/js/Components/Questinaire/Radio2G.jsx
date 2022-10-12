import React from 'react';
import Title from '@/Components/Title';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import RadioGroup from '@mui/material/RadioGroup';
import Radio from '@mui/material/Radio';

export default function Radio2G({title,label1,label2,func1,func2}) {
    return(
        <div>
            <Title title={title}/>
            <RadioGroup>
            <FormControlLabel value={1} control={<Radio />} label={label1} onClick={func1}/>
            <FormControlLabel value={2} control={<Radio />} label={label2} onClick={func2}/>
            </RadioGroup>
        </div>
        );
}