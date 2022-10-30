import React from 'react';
import Title from '@/Components/Title';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

export default function UsersSetting({title,smaller,bigger,settings,handleList,required}) {

    return(
        <div className="my-4">
            <Title title={title} required={required} />
            {settings.map(setting=>{
                return(
                    <div>
                        {(setting.id>=Number(smaller) && setting.id<=Number(bigger)) &&
                            <FormControlLabel control={<Checkbox name="setting" onChange={handleList} />} value={setting.id} label={setting.setting}/>
                        }
                    </div>
                )}
            )}
        </div>
    );
}