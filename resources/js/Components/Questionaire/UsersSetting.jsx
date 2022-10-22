import React from 'react';
import Title from '@/Components/Title';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

export default function UsersSetting({title,smaller,bigger,postData,settings,passData,passwords,addPasswords}) {
    
    function changeDisplay(){
    document.getElementById('pass6') . style . display = "inline";
    }
    function returnDisplay(){
    document.getElementById('pass6') . style . display = "none";
    }
    
    function changeDisplay(){
    document.getElementById('pass10') . style . display = "inline";
    }
    function returnDisplay(){
    document.getElementById('pass10') . style . display = "none";
    }
    
    return(
        <div>
            <Title title={title}/>
            {settings.map(setting=>{
                return(
                    <div>
                        {(setting.id>=Number(smaller) && setting.id<=Number(bigger)) &&
                            <FormControlLabel control={<Checkbox />} value={setting.id} label={setting.setting} onChange={postData}/>
                        }
                    </div>
                )}
            )}
        </div>
    );
}