import React from 'react';
import Title from '@/Components/Title';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

export default function Questions({limiteds,handleLimitedList}) {
    
    return(
        <div>
            <Title title='入力を許可する文字を選択してください。'/>
            <FormControl>
            {limiteds.map((limited,index)=>{
            return (
                <FormControlLabel value={index+1} control={<Checkbox />} label={limited} onClick={handleLimitedList}/>
                );
            })}
            </FormControl>
        </div>
        );
}