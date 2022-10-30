import React, { useState,useEffect } from 'react';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm } from '@inertiajs/inertia-react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

export default function Result({questionaires,questions,categories,users,auth,errors}){
    console.log(questions);
    return(
        <>
            <Typography variant="h1">{questionaires.name}</Typography>
            {questions.map(question => {
                return(
                    <>
                        <Typography variant="h2">{question.question}</Typography>
                        {question.answers.map(answer => {
                            return(
                                <Typography variant="h4">{answer.answer}</Typography>
                            );
                        })}
                    </>
                );
            })}
            
            <Button variant="contained" href='/'>戻る</Button>
        </>
        );
}