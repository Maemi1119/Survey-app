import React, {useState} from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Title from '@/Components/Title';

export default function ClassModify({id,title,content,OK,cancel}) {
    return(
        <div className='Modify' id={id}>
            <Title title={title}/>
            {content}
            <Stack direction="row" spacing={2}>
                <Button variant="contained" onClick={{OK}}>'決定'</Button>
                <Button variant="outlined" onClick={{cancel}}>'キャンセルする'</Button>
            </Stack>
        </div>
    );
};