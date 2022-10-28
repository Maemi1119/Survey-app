import React, { useState,useEffect } from 'react';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm } from '@inertiajs/inertia-react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Answer from '@/Components/Answer';
import {Inertia} from "@inertiajs/inertia";
import axios from 'axios';

export default function AnswerQuestion({questionaires,questions,methods,choices,auth,errors}){
    
    const submit = () => {
        axios.post(`/answer/${questionaires.id}`, {questions:questions})
        .then(response =>{
        Inertia.get('/setting/'+questionaires.id);
        })
        .catch(error=>{console.log(error)});
    };
    
    return(
        <>
            <Typography variant="h5">{questionaires.name}</Typography>
            {questions.map(question =>{
                return(
                    <Answer questions={question} methods={methods} choices={choices}/>
                );
            })}
            
            <Button 
            component="button" 
            variant="contained" 
            onClick={()=>submit()} 
            className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
    >設定の確認</Button>
        </>
    );
}