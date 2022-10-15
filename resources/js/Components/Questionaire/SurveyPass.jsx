import React from 'react';
import Title from '@/Components/Title';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import Button from '@mui/material/Button';

export default function SurveyPass({postData,passwords,addPasswords}) {
    return(
        <div id='password'>
            <TextField label="password" variant="standard" onChange={postData}/>
            {passwords.map((password) => {
                return(
                <Stack direction="row" spacing={0}>
                <TextField variant="standard" onChange={postData}/>
                <IconButton aria-label="delete"><DeleteIcon /></IconButton>
                </Stack>
                );
            })}
            <Button variant="contained" onClick={() => addPasswords()}>+</Button>
        </div>
        );
}