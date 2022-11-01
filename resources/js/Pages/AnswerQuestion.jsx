import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Answer from '@/Components/Answer';
import Typography from '@mui/material/Typography';
import {Inertia} from "@inertiajs/inertia";
import axios from 'axios';

export default function AnswerQuestion({questionaires,questions,methods,choices,auth,errors}){
    
    const [answers,setAnswers] = useState([]);
    
    const submit = () => {
        const images = answers.filter((answer) => typeof(answer.answer) === 'object');
        const data = new FormData();
		images.map((image) => {
			data.append("images[]", image[0]);
		});
		const answerExe = answers.filter((answer) => typeof(answer.answer) !== 'object');
        axios.post(`/postanswer/${questionaires.id}`, {answers:answerExe, image:images})
        .then(response =>{
        Inertia.get('/endanswer');
        })
        .catch(error=>{console.log(error)});
    };
    
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