import React, { useState } from 'react';
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

export default function List({questionaires,questions,methods,choices,auth,errors}){
    
    {/*ボタン*/}
    const [selected, setSelected] = React.useState(false);
    
    const OK = () =>{
        Inertia.get('/setting/'+questionaires.id);
    };
    
    return(
        <>
            <Typography variant="h5">{questionaires.name}</Typography>

            {questions.map(question =>{
                return(
                    <div className='preview'>
                        <Title title={question.question}/>
                        
                        {(question.method_id==1) && 
                            question.choices.map(choice => {
                                return(
                                    <ToggleButton
                                      value={choice.choice}
                                      selected={selected}
                                      onChange={() => {setSelected(!selected)}}
                                    >
                                    {choice.choice}
                                    </ToggleButton>
                                );
                            })
                        }
                        
                        {(question.method_id==2) && 
                            <TextField variant="standard"/>
                        }
                        
                        {(question.method_id==3) && 
                            <TextField variant="standard"/>
                        }
                        
                        {(question.method_id==4) && 
                            <Stack direction="row" spacing={2}>
                            <p>{question.bar_left}</p>
                                <Sliders />
                            <p>{question.bar_right}</p>
                            </Stack>
                        }
                        
                        {(question.method_id==5) && 
                            Array(Number(question.image)).fill(0).map((val) => {
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
                                </Stack>)
                            })
                        }
                        
                    </div>
                );
            })}
            <Button></Button>
        </>
        );
}