import React from 'react';
import Title from '@/Components/Title';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

export default function SurveyPass() {
    return(
        <div id='password'>
            <TextField label="password" variant="standard"/>
            {passwords.map((possword,index) => {
                return(
                <Stack direction="row" spacing={0}>
                <TextField variant="standard"/>
                <IconButton aria-label="delete"><DeleteIcon /></IconButton>
                </Stack>
                );
            })}
            <Button variant="contained" onClick={() => addPasswords()}>+</Button>
        </div>
        );
}