import React from 'react';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import Button from '@mui/material/Button';

export default function SurveyPass({postData,passwords,addPasswords,value,removePass,data}) {
    return(
        <div>
            <TextField label="password" variant="standard" onChange={(e) => postData(e, value)}/>
            {passwords.map((password, index) => {
                const setting_id = value + "_" + index;
                return(
                    <Stack direction="row" spacing={0}>
                        <TextField value={data.passwords[setting_id]} variant="standard" onChange={(e) => postData(e, setting_id)}/>
                        <IconButton aria-label="delete" onClick={(e) => removePass(e, setting_id)} >
                            <DeleteIcon />
                        </IconButton>
                    </Stack>
                );
            })}
            <Button variant="contained" onClick={() => addPasswords()}>+</Button>
        </div>
    );
}