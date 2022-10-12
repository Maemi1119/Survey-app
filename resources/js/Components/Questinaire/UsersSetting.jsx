import React from 'react';
import Title from '@/Components/Title';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

export default function UsersSetting({title,smaller,bigger}) {
    return(
        <div>
        <Title title={title}/>
        {settings.map(setting=>
            {return(
                <div>
                {(setting.id>={smaller} && setting.id<={bigger}) && 
                    <FormControlLabel control={<Checkbox />} value={setting.id} label={setting.setting}/>
                }
                </div>
            )}
        )}
        </div>
        );
}