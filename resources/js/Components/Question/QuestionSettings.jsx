import React from 'react';
import Title from '@/Components/Title';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Letter from '@/Components/Question/Letter';
import Images from '@/Components/Question/Images';

export default function QuestionSettings({postData,questionSettings,data,questionaires,setData}) {
    console.log(data);
    const settings = [
        {id:1, content:<Letter id={questionaires.id} max={(e) => setData("max_letter", e.target.value)} min={(e) => setData("min_letter", e.target.value)}/>},
        {id:2, content:<p>表示</p>},
        {id:3, content:<Images id={questionaires.id} postData={(e) => setData("data", e.target.value)}/>},
        {id:4, content:<p>必須</p>},
        {id:5, content:<p>分岐</p>},
        ];
    
    return(
        <>
          <Title title='【設定】'/>
          {questionSettings.map((setting, index) => {
                return(
                <>
                <FormControlLabel control={<Checkbox />} value={index+1} label={setting} onChange={postData}/> 
                {data.setting.includes(String(settings[index].id))&&settings[index].content}
                </>
                )})
            }
        </>
        );
}