import React from 'react';
import Title from '@/Components/Title';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function Choices({placeholder,placeholder2,choices,addChoices,handleChoice}) {
    return(
        <div>
          <Title title='選択肢を作成してください'/>
          <TextField placeholder={placeholder} variant="standard" name='form1' onChange={handleChoice}/>
          <TextField placeholder={placeholder2} variant="standard" name='form2' onChange={handleChoice}/>
             {choices.map((choice,index) => {
                return(
                <Stack direction="row" spacing={0}>
                <TextField variant="standard" name={`form${index+3}`} onChange={handleChoice}/>
                <IconButton aria-label="delete"><DeleteIcon /></IconButton>
                </Stack>
                );
              })}
          <Button variant="contained" onClick={() => addChoices()}>+</Button>
        </div>
        );
}