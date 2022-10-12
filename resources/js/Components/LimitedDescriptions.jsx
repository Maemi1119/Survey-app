import React from 'react';
import Title from '@/Components/Title';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Checkbox from '@mui/material/Checkbox';

export default function Questions({id}) {
    return(
        <div className="hidden" id="limitedDescriptions{id}">
            <Title title='入力を許可する文字を選択してください。'/>
            <FormControl>
            {limiteds.map((limited,index)=>{
            return (
                <FormControlLabel value={index+1} control={<Checkbox />} label={limited} />
                )
            })}
            </FormControl>
        </div>
        );
}