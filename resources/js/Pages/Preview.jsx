import React, { useState,useEffect } from 'react';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm } from '@inertiajs/inertia-react';
import Title from '@/Components/Title';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import ToggleButton from '@mui/material/ToggleButton';
import TextField from '@mui/material/TextField';
import PhotoCamera from '@mui/icons-material/PhotoCamera';

export default function List({questionaires,questions,methods,choices,auth,errors}){
    
    {/*ボタン*/}
    const [selected, setSelected] = React.useState(false);
    
    {/*スライダー*/}
    const [value, setValue] = React.useState((questions.max_value+questions.min_value)/2);

    const handleSliderChange = (event, newValue) => {
    setValue(newValue);
    };
    
    const handleInputChange = (event) => {
    setValue(event.target.value === '' ? '' : Number(event.target.value));
    };
    
    const handleBlur = () => {
    if (value < 0) {
      setValue(0);
    } else if (value > 10000) {
      setValue(10000);
    }
    };
    
    return(
        <>
        {questions.map(preview =>{
            return(
                <div className='preview'>
                <Typography variant="h5">{questionaires.name}</Typography>
                <Title title={questions.question}/>
                {/*選択*/}
                {(methods.method==1) && 
                    choices.map(choice => {
                        return(
                            <ToggleButton
                              value={choice.choice}
                              selected={selected}
                              onChange={() => {
                                setSelected(!selected);
                              }}
                            >
                            {choice.choice}
                            </ToggleButton>
                        );
                    })
                }
                {/*自由記述*/}
                {(methods.method==2) && 
                    <TextField variant="standard"/>
                }
                {/*制限付き自由記述*/}
                {(methods.method==3) && 
                    <TextField variant="standard"/>
                }
                {/*スライダー*/}
                {(methods.method==4) && 
                    <Stack direction="row" spacing={2}>
                    <p>{questions.bar_left}</p>
                    <Sliders
                        min={questions.min_value}
                        max={questions.max_value}
                    />
                    <p>{questions.bar_right}</p>
                    </Stack>
                }
                {/*データ*/}
                {(methods.method==5) && 
                    Array(questions.image).fill(0).map((val,i) => {
                        <Stack direction="row" alignItems="center" spacing={0}>
                          <Button variant="contained" component="label">
                            Upload
                            <input hidden accept="image/*" multiple type="file" />
                          </Button>
                          <IconButton color="primary" aria-label="upload picture" component="label">
                            <input hidden accept="image/*" type="file" />
                            <PhotoCamera />
                          </IconButton>
                        </Stack>
                    })
                }
                </div>
            );
        })}
        </>
        );
}