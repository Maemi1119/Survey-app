import React from 'react';
import Title from '@/Components/Title';
import FormControlLabel from '@mui/material/FormControlLabel';
import RadioGroup from '@mui/material/RadioGroup';
import Radio from '@mui/material/Radio';

export default function Radio2G({title,postData,label,name,required}) {
    return(
        <div className="my-4">
            <Title title={title} required={required} />
            <RadioGroup name={name}>
                <FormControlLabel value={1} control={<Radio />} label={label[0]} onChange={postData}/>
                <FormControlLabel value={2} control={<Radio />} label={label[1]} onChange={postData}/>
            </RadioGroup>
        </div>
    );
}