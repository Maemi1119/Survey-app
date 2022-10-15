import React, { useState,useEffect } from 'react';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm } from '@inertiajs/inertia-react';
import Title from '@/Components/Title';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Slider from '@mui/material/Slider';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import Stack from '@mui/material/Stack';
import Questions from '@/Components/Question/Questions';
import Methods from '@/Components/Question/Methods';
import Choices from '@/Components/Question/Choices';    
import LimitedDescriptions from '@/Components/Question/LimitedDescriptions';
import SliderSettings from '@/Components/Question/SliderSettings';
import Data from '@/Components/Question/Data';
import QuestionSettings from '@/Components/Question/QuestionSettings';
import Letter from '@/Components/Question/Letter';
import Images from '@/Components/Question/Images';

export default function Create({ questionaires, methods, auth}) {
    
    {/*choice*/}
    const [choices, setChoices] = useState([]);
    const addChoices = () => {
        setChoices((prevChoices) => ([ ...prevChoices, "" ]));
      }
    
    const { data, setData, post, processing, errors, reset } = useForm({
        question: '',
        method: '',
        choice: [],
        limited: [],
        data:'',
        min_letter:'',
        max_letter:'',
        setting:'',
    });
    
    {/*制限*/}
    const limiteds = ['数字','ひらがな','カタカナ','日本語','アルファベット'];

    {/*データの個数*/}
    const [number, setNumber] = React.useState('');
    const handleChange = (event) => {
    setNumber(event.target.value);
    };
    
    {/*設定*/}
    const questionSettings = ['字数','表示','画像','必須','分岐'];

    {/*質問の繰り返し*/}
    const [questions, setQuestions] = useState([]);
    const addQuestions = () => {
        setQuestions((prevQuestions) => ([ ...prevQuestions, "" ]));
      };

    const onHandleChange = (event) => {
        setData(event.target.name, event.target.type === 'checkbox' ? event.target.checked : event.target.value);
    };

    const submit = (e) => {
        e.preventDefault();

        //post(route('login'));
    };
    
    return (
        <>
         {/*<AuthenticatedLayout
            auth={auth}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">creatform</h2>}
        >*/}
        <div>
          <Title title='アンケート名'/>
          <h8>{ questionaires.name }</h8>
        </div>
        
        <form onSubmit={submit}>
        
            <Questions id={questionaires.id} title='【質問】' label={'質問文'} placeholder={'好きな食べ物は何ですか？'} postData={(e) => setData("question", e.target.value)}/>
            
            <Methods id={questionaires.id} postData={(e) => setData("method", e.target.value)} methods={methods}/>
            
            <Choices id={questionaires.id} placeholder={'りんご'} placeholder2={'バナナ'} postData={(e) => setData("choice", e.target.value)} choices={choices} addChoices={addChoices}/>
            
            <LimitedDescriptions id={questionaires.id} postData={(e) => setData("limited", e.target.value)} limiteds={limiteds}/>
            
            <SliderSettings id={questionaires.id} postData={(e) => setData("", e.target.value)}/>
            
            <Data id={questionaires.id} postData={(e) => setData("data", e.target.value)} number={number} handleChange={handleChange}/>
            
            <QuestionSettings id={questionaires.id} number={4} questionSettings={questionSettings}/>
            
            <letter id={questionaires.id} max={(e) => setData("max_letter", e.target.value)} min={(e) => setData("min_letter", e.target.value)}/>
            
            <div className='hidden' id='show'>
            </div>
            
            <Images id={questionaires.id} postData={(e) => setData("images", e.target.value)}/>
            
            
        {/*２問め以降*/}
        {/*
        {questions.map((question,index) => {
            return(
                <div>
                    <Questions id={index+2} label={'質問文'} placeholder={''} postData={(e) => setData("question", e.target.value)}/>
                
                    <Methods postData={(e) => setData("method", e.target.value)}/>
                    
                    <Choices id={index+2} placeholder={''} placeholder2={''} postData={(e) => setData("choice", e.target.value)}/>
                    
                    <LimitedDescriptions id={index+2} postData={(e) => setData("limited", e.target.value)}/>
                    
                    <SliderSettings id={index+2} postData={(e) => setData("", e.target.value)}/>
                    
                    <Data id={index+2} postData={(e) => setData("data", e.target.value)}/>
                    
                    <QuestionSettings id={index+2} number={5} postData={(e) => setData("", e.target.value)}/>
                    
                    <letter id={index+2} postData={(e) => setData("max_letter","min_letter", e.target.value)}/>
                    
                    <div className='hidden' id='show'>
                    </div>
                    
                    <Images id={index+2} postData={(e) => setData("images", e.target.value)}/>
                    
                    <div className='hidden' id='branch'>
                    </div>
                </div>
            );
        })}
        */}
        
        <Button component="button" variant="outlined" className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
type="submit">質問の追加</Button>
        
        <Button component="button" variant="contained" className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
type="submit">設定の確認</Button>
        </form>
        {/*</AuthenticatedLayout>*/}
        </>
    );
}