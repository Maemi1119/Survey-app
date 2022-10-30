import React, { useState,useCallback } from 'react';
import Header from '@/Components/Header';
import {Inertia} from "@inertiajs/inertia";
import axios from 'axios';
import Create from '@/Components/Create';
import Title from '@/Components/Title';
import Button from '@mui/material/Button';

export default function CreateQuestions({ questionaires, methods, auth}) {
    
    const submit = () => {
        if(questions.length==0){
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
            }else if(question.method==5 && !imageVali(question)){
                check = true;
            }
        });
        if(check){
            return false;
        }
        axios
            .post(`/create/${questionaires.id}`, {questions:questions})
            .then(response =>{
                Inertia.get('/setting/'+questionaires.id);
            })
            .catch(error=>{
                console.log(error);
            });
    };

    const [questions, setQuestions] = useState([]);
    const [questionForms, setQuestionForms] = useState([]);
    const addQuestions = useCallback((question,num) => {
        if(!validation(question)){
            return false;
        }
        if(question.method==1 && !choiceVali(question)){
            return false;
        }else if(question.method==3 && !limitedVali(question)){
            return false;
        }else if(question.method==4 && !barVali(question)){
            return false;
        }else if(question.method==5 && !imageVali(question)){
            return false;
        }
        
        setQuestions(prevQuestions => ([ ...prevQuestions, question ]));
        setQuestionForms((prevState) => [...prevState, ""]);
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
    };
      
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
    
    const imageVali = (question) =>{
        const image = question.image;
        if(image !== ''){
            return true;
        }else{
            return false;
        }
    };
    
    const removeQuestion = (num) => {
        let newQuestions = [...questions];
        let newForms = [...questionForms];

        newQuestions.splice(num, 1);
        newForms.splice(-1);
        
        setQuestions(newQuestions);
        setQuestionForms(newForms);
    };
    
    return(
        <>
            <Header>アンケート作成</Header>
            
            <div className="w-4/5 mx-auto my-10">
        
                <div>
                    <Title title='アンケート名'/>
                    <p className="p-2">{ questionaires.name }</p>
                </div>
                
                <Title title='質問1'/>
                <Create questionaires={questionaires} methods={methods} addQuestions={addQuestions} num={0} />
                {questionForms.map((question,index) => {
                    return(
                        <>
                            <Title title={`質問${index+2}`}>
                                <Button onClick={() => removeQuestion(index+1)} size="small" className="float-right" color="error" variant="contained">削除</Button>
                            </Title>
                            <Create questionaires={questionaires} methods={methods} addQuestions={addQuestions} num={index+1}/>
                        </>
                    );
                })}
                
                <div className="my-10">
                    <Button color="warning" variant="contained" onClick={()=>submit()}>設定の確認</Button>
                </div>
            </div>
        </>
    );
}