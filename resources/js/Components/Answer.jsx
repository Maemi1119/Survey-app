import React, { useState,useCallback } from 'react';
import { useForm } from '@inertiajs/inertia-react';
import Title from '@/Components/Title';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import ToggleButton from '@mui/material/ToggleButton';
import TextField from '@mui/material/TextField';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import IconButton from '@mui/material/IconButton';
import {Inertia} from "@inertiajs/inertia";

import Sliders from '@/Components/Question/Sliders';

export default function Answer({questions,methods,choices,limiteds,auth}){
    
    {/*ボタン*/}
    const [selected, setSelected] = React.useState(false);
    const selectChoice = (e) => {
        setSelected(!selected);
        setData('answer', e.target.value);
    };
    
    const enterText = (e) => {
        setData('answer', e.target.value);
    }
    
    const limited = useCallback((question) => {
        
    });
    
    const { data, setData, post, processing, errors, reset } = useForm({
        answer:''
    });
    
    return(
        <>
            <Title title={questions.question}/>
            {(questions.method_id==1) && 
                questions.choices.map(choice => {
                    return(
                        <ToggleButton
                          value={choice.choice}
                          selected={selected}
                          onChange={selectChoice}
                        >
                        {choice.choice}
                        </ToggleButton>
                    );
                })
            }
            
            {(questions.method_id==2) && 
                <TextField variant="standard" onChange={enterText}/>
            }
            
            {(questions.method_id==3) && 
                <TextField variant="standard" onChange={enterText}/>
            }
            
            {(questions.method_id==4) && 
                <Stack direction="row" spacing={2}>
                <p>{questions.bar_left}</p>
                    <Sliders />
                <p>{questions.bar_right}</p>
                </Stack>
            }
                        
            {(questions.method_id==5) && 
                Array(Number(questions.image)).fill(0).map((val) => {
                return(
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
                )
                })
            }
            <Button></Button>
        </>
        );
}