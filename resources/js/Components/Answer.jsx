import React, { useState,useEffect,useCallback } from 'react';
import { useForm } from '@inertiajs/inertia-react';
import Title from '@/Components/Title';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import ToggleButton from '@mui/material/ToggleButton';
import TextField from '@mui/material/TextField';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import {Inertia} from "@inertiajs/inertia";
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

import Sliders from '@/Components/Question/Sliders';

export default function Answer({questions,methods,choices,limiteds,answers,setAnswers,auth,AnswerN}){
    
    {/*ボタン*/}
    const [selected, setSelected] = useState([]);
    useEffect(()=>{
        let selectedChoice = [];
        questions.choices.forEach(()=>{
            selectedChoice.push(false);
        });
        setSelected(selectedChoice);
    },[]);
    
    const selectChoice = (e) => {
        setData('answer', e.target.value);
        let check = false;
      if(answers.length>0){
          answers.forEach((answer)=>{
              if(answer.id==AnswerN){
                  check=true;
              }
          })
      }
      if(check){
          let newAnswers = [];
            answers.forEach((answer)=>{
                if(answer.id==AnswerN){
                    newAnswers.push({id:AnswerN,answer:event.target.value});
                }else{
                    newAnswers.push(answer);
                }
            });
            setAnswers(newAnswers);

        }else{
            setAnswers([...answers,{id:AnswerN,answer:event.target.value}])
        }
    };
    
    const enterText = (e) => {
        setData('answer', e.target.value);
        let check = false;
      if(answers.length>0){
          answers.forEach((answer)=>{
              if(answer.id==AnswerN){
                  check=true;
              }
          })
      }
      if(check){
          let newAnswers = [];
            answers.forEach((answer)=>{
                if(answer.id==AnswerN){
                    newAnswers.push({id:AnswerN,answer:event.target.value});
                }else{
                    newAnswers.push(answer);
                }
            });
            setAnswers(newAnswers);

        }else{
            setAnswers([...answers,{id:AnswerN,answer:event.target.value}])
        }
    };
    
    const limitedText = (e) => {
        setData('answer', e.target.value);
        let check = false;
      if(answers.length>0){
          answers.forEach((answer)=>{
              if(answer.id==AnswerN){
                  check=true;
              }
          })
      }
      if(check){
          let newAnswers = [];
            answers.forEach((answer)=>{
                if(answer.id==AnswerN){
                    newAnswers.push({id:AnswerN,answer:event.target.value});
                }else{
                    newAnswers.push(answer);
                }
            });
            setAnswers(newAnswers);

        }else{
            setAnswers([...answers,{id:AnswerN,answer:event.target.value}])
        }
    };
    
    const handleOnAddImage = (e) => {
		if (!e.target.files) return;
		if(e.target.files.length>questions.image){
		    return;
		}
		setData('answers', [...data.answer, ...e.target.files]);
		let check = false;
      if(answers.length>0){
          answers.forEach((answer)=>{
              if(answer.id==AnswerN){
                  check=true;
              }
          })
      }
      if(check){
          let newAnswers = [];
            answers.forEach((answer)=>{
                if(answer.id==AnswerN){
                    newAnswers.push({id:AnswerN,answer:event.target.files});
                }else{
                    newAnswers.push(answer);
                }
            });
            setAnswers(newAnswers);

        }else{
            setAnswers([...answers,{id:AnswerN,answer:event.target.files}])
        }
	};
    
    const limited = useCallback((question) => {
        
    });
    
    {/*スライダー*/}
    const [value, setValue] = useState(50);

    const handleSliderChange = useCallback((event, newValue) => {
      setValue(newValue);
      setData('answer', newValue);
      let check = false;
      if(answers.length>0){
          answers.forEach((answer)=>{
              if(answer.id==AnswerN){
                  check=true;
              }
          })
      }
      if(check){
          let newAnswers = [];
            answers.forEach((answer)=>{
                if(answer.id==AnswerN){
                    newAnswers.push({id:AnswerN,answer:event.target.value});
                }else{
                    newAnswers.push(answer);
                }
            });
            setAnswers(newAnswers);

        }else{
            setAnswers([...answers,{id:AnswerN,answer:event.target.value}])
        }
    });
    
    const handleInputChange = useCallback((event) => {
      setValue(event.target.value === '' ? '' : Number(event.target.value));
      setData('answer', Number(event.target.value));
      if(answers.filter((answer,index)=>{answer.id==AnswerN}).length>0){
            setAnswers(answers.map((answer)=>{
                answer.id==AnswerN ? {id:AnswerN, answer:event.target.value} : answer 
            }));
        }else{
            setAnswers([...answers,{id:AnswerN,answer:event.target.value}])
        }
    });
    
    const handleBlur = useCallback(() => {
      if (value < 0) {
        setValue(0);
      } else if (value > 100) {
        setValue(100);
      }
    });
    
    const { data, setData, post, processing, errors, reset } = useForm({
        answer:[],
        image:[]
    });
    
    return(
        <>
            <Title title={questions.question}/>
            {(questions.method_id==1) && 
            <ToggleButtonGroup
              value={data.answer}
              exclusive
              onChange={selectChoice}
              aria-label="text alignment"
            >
                {questions.choices.map((choice,index) => {
                    return(
                        <ToggleButton
                          value={choice.choice}
                        >
                        {choice.choice}
                        </ToggleButton>
                    );
                })}
            </ToggleButtonGroup>
            }
            
            {(questions.method_id==2) && 
                <TextField variant="standard" onChange={enterText}/>
            }
            
            {(questions.method_id==3) && 
                <TextField variant="standard" onChange={limitedText}/>
            }
            
            {(questions.method_id==4) && 
                <Stack direction="row" spacing={2}>
                <p>{questions.bar_left}</p>
                    <Sliders handleSliderChange={handleSliderChange} handleInputChange={handleInputChange} handleBlur={handleBlur} value={value}/>
                <p>{questions.bar_right}</p>
                </Stack>
            }
                        
            {(questions.method_id==5) && 
                <Button variant="contained" component="label" endIcon={<PhotoCamera />}>
                Upload
                    <input hidden accept="image/*" multiple type="file" onChange={handleOnAddImage}/>
                </Button>
            }
        </>
        );
}