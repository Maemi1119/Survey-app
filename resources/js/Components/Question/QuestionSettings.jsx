import React from 'react';
import Title from '@/Components/Title';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

export default function QuestionSettings({id,number,questionSettings}) {
    return(
        <div id={id} className="setting">
          <Title title='【設定】'/>
          {questionSettings({number}).map((setting, index) => {
                return(
                <FormControlLabel control={<Checkbox />} value={index} label={setting} />
                )})
            }
        </div>
        );
}