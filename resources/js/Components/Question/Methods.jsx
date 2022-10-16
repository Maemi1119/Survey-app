import React from 'react';
import Title from '@/Components/Title';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';

export default function Methods({id,methods}) {
    return(
        <div id={id}>
            <FormControl>
              <Title title='【回答方法】'/>
              <RadioGroup>
                {methods.map(method=>{
                    return (
                    <FormControlLabel value={method.id} control={<Radio />} label={method.method} />
                    );
                })}
              </RadioGroup>
            </FormControl>
        </div>
        );
}