import React, { useState,useEffect } from 'react';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm } from '@inertiajs/inertia-react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Answer from '@/Components/Answer';
import Typography from '@mui/material/Typography';
import {Inertia} from "@inertiajs/inertia";
import axios from 'axios';

export default function AnswerQuestion({questionaires,questions,methods,choices,auth,errors}){
    
    const submit = () => {
        axios.post(`/postanswer/${questionaires.id}`, {answers:answers})
        .then(response =>{
        Inertia.get('/');
        })
        .catch(error=>{console.log(error)});
    };
    
    const [answers,setAnswers] = useState([]);
    
    return(
        <>
            <Typography variant="h5">{questionaires.name}</Typography>
            {questions.map(question =>{
                return(
                    <Answer questions={question} methods={methods} choices={choices} answers={answers} setAnswers={setAnswers} AnswerN={question.id}/>
                );
            })}
            
            <Button 
            component="button" 
            variant="contained" 
            onClick={()=>submit()} 
            className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
    >回答を送信</Button>
        </>
    );
}