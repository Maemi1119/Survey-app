import React, { useState,useCallback } from 'react';
import { useForm } from '@inertiajs/inertia-react';
import {Inertia} from "@inertiajs/inertia";
import axios from 'axios';
import Create from '@/Components/Create';
import Title from '@/Components/Title';
import Button from '@mui/material/Button';

export default function CreateQuestions({ questionaires, methods, auth}) {
    
    const submit = () => {
        if(questions==0){
            return false;
        }
        let check = false;
        questions.forEach(question => {
            if(!validation(question)){
                check = true;
            }
            if(question.method==1 && !choiceVali(question)){
                check = true;
            }else if(question.method==3 && !limitedVali(question)){
                check = true;
            }else if(question.method==4 && !barVali(question)){
                check = true;
            }else if(question.method==5 && !dataVali(question)){
                check = true;
            }
        });
        if(check){
            return false;
        }
        axios.post(`/create/${questionaires.id}`, {questions:questions})
        .then(response =>{
        Inertia.get('/setting/'+questionaires.id);
        })
        .catch(error=>{console.log(error)});
    };
    
    const [questions, setQuestions] = useState([]);
    const addQuestions = useCallback((question) => {
        console.log(question);
        if(!validation(question)){
            return false
        }
        if(question.method==1 && !choiceVali(question)){
            return false
        }else if(question.method==3 && !limitedVali(question)){
            return false
        }else if(question.method==4 && !barVali(question)){
            return false
        }else if(question.method==5 && !dataVali(question)){
            return false
        }
        setQuestions((prevQuestions) => ([ ...prevQuestions, question ]));
    });
    
    const validation = (question) => {
        const questionText = question.question;
        const method = question.method;
        if (!(questionText.trim().length == 0) && !(method == '')){
            return true;
        }else{
            return false;
        }
    };
    
    const choiceVali = (question) =>{
      const choice = question.choice;
      if(!choice.length ==0){
          return true;
      }else{
          return false;
      }
    }
      
    const limitedVali = (question) =>{
        const limited = question.limited;
        let check = false;
        limited.forEach((limit)=>{
            if(typeof limit !== 'undefined'){
                check=true;
            }
        });
        return check;
    };
    
    const barVali = (question) =>{
        const min = question.min_value;
        const max = question.max_value;
        const left = question.bar_left;
        const right = question.bar_right;
        console.log(question);
        
        if((min.trim().length!==0) && (max.trim().length!==0) && (left.trim().length!==0) && (right.trim().length!==0)){
            if(Number(min)<Number(max)){
                return true;
            }else{
                return false;
            }
        }else{
            return false;
        }
    };
    
    const dataVali = (question) =>{
        const dataNumber = question.data;
        if(dataNumber !== ''){
            return true;
        }else{
            return false;
        }
    };
    
    
    return(
        <>
        {/*<AuthenticatedLayout
            auth={auth}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">creatform</h2>}
        >*/}
        
            <div>
              <Title title='アンケート名'/>
              <h8>{ questionaires.name }</h8>
            </div>
            
            <Create questionaires={questionaires} methods={methods} addQuestions={addQuestions} />
            {questions.map((question,index) => {
                return(
                    <Create questionaires={questionaires} methods={methods} addQuestions={addQuestions}/>
                );
            })}
            <Button component="button" variant="contained" onClick={()=>submit()} className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
    >設定の確認</Button>
    
        {/*</AuthenticatedLayout>*/}
        </>
    );
}