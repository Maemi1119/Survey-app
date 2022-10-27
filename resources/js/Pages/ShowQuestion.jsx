import React, { useState,useEffect } from 'react';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm } from '@inertiajs/inertia-react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

export default function Result({questionaires,questions,categories,users,auth,errors}){
    
    return(
        <>
            <Typography variant="h4">{questionaires.name}</Typography>
            {questions.map(question => {
                return(
                    <Typography variant="h2">{question.question}</Typography>
                    
                    {question.answers.map(answer => {
                        return(
                            {question.method_id == 1 && <></> }
                            {question.method_id == 2 && <></> }
                            {question.method_id == 3 && <></> }
                            {question.method_id == 4 && <></> }
                            {question.method_id == 5 && <></> }
                        )
                    })}
                )
            })}
            
            <Button variant="contained">戻る</Button>
        </>
        );
}