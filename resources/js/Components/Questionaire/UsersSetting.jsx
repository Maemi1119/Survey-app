import React from 'react';
import Title from '@/Components/Title';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

export default function UsersSetting({title,smaller,bigger,settings,handleList}) {

    return(
        <div>
            <Title title={title}/>
            {settings.map(setting=>{
                return(
                    <div>
                        {(setting.id>=Number(smaller) && setting.id<=Number(bigger)) &&
                            <FormControlLabel control={<Checkbox />} value={setting.id} label={setting.setting} onClick={handleList}/>
                        }
                    </div>
                )}
            )}
        </div>
    );
}