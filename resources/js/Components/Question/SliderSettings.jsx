import React from 'react';
import TextField from '@mui/material/TextField';

export default function SliderSettings({minPost,maxPost,leftPost,rightPost}) {
    return(
        <div>
          <TextField label="最小値" placeholder='1' variant="standard" onChange={minPost}/>
          <TextField label="最大値" placeholder='100' variant="standard" onChange={maxPost}/>
          <TextField label="左" placeholder='低い' variant="standard" onChange={leftPost}/>
          <TextField label="右" placeholder='高い' variant="standard" onChange={rightPost}/>
        </div>
    );
}