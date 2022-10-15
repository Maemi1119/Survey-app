import React from 'react';
import Title from '@/Components/Title';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import Stack from '@mui/material/Stack';

export default function Choices({id,placeholder,placeholder2,choices,addChoices}) {
    return(
        <div className='hidden' id='choice{id}'>
          <Title title='選択肢を作成してください'/>
          <TextField placeholder={placeholder} variant="standard"/>
          <TextField placeholder={placeholder2} variant="standard"/>
             {choices.map((choice,index) => {
                return(
                <Stack direction="row" spacing={0}>
                <TextField variant="standard"/>
                <IconButton aria-label="delete"><DeleteIcon /></IconButton>
                </Stack>
                );
              })}
          <Button variant="contained" onClick={() => addChoices()}>+</Button>
        </div>
        );
}