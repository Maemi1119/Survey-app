import React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

export default function ClassModify({id,content,OK,cancel}) {
    return(
        <div className='hidden' id={id}>
           {content}
             <Stack direction="row" spacing={2}>
                <Button variant="contained" onClick={OK}>'決定'</Button>
                <Button variant="outlined" onClick={cancel}>'キャンセル'</Button>
            </Stack>
        </div>
    );
}