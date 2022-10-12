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
import Questions from '@/Components/Questions';
import Methods from '@/Components/Methods';
import Choices from '@/Components/Choices';
import LimitedDescriptions from '@/Components/LimitedDescriptions';
import SliderSettings from '@/Components/SliderSettings';
import Data from '@/Components/Data';
import QuestionSettings from '@/Components/QuestionSettings';
import Letter from '@/Components/Letter';
import Images from '@/Components/Images';

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
        
            <Questions id={questionaires.id} title='【質問】' label={'質問文'} placeholder={'好きな食べ物は何ですか？'}/>
            
            <Methods id={questionaires.id}/>
            
            <Choices id={questionaires.id} placeholder={'りんご'} placeholder2={'バナナ'}/>
            
            <LimitedDescriptions id={questionaires.id}/>
            
            <SliderSettings id={questionaires.id}/>
            
            <Data id={questionaires.id}/>
            
            <QuestionSettings id={questionaires.id} number={4} />
            
            <letter id={questionaires.id}/>
            
            <div className='hidden' id='show'>
            </div>
            
            <Images id={questionaires.id}/>
            
            
        {/*２問め以降*/}
        {questions.map((question,index) => {
            return(
                <div>
                    <Questions id={index+2} label={'質問文'} placeholder={''}/>
                
                    <Methods />
                    
                    <Choices id={index+2} placeholder={''} placeholder2={''}/>
                    
                    <LimitedDescriptions id={index+2}/>
                    
                    <SliderSettings id={index+2}/>
                    
                    <Data id={index+2}/>
                    
                    <QuestionSettings id={index+2} number={5} />
                    
                    <letter id={index+2} />
                    
                    <div className='hidden' id='show'>
                    </div>
                    
                    <Images iid={index+2}/>
                    
                    <div className='hidden' id='branch'>
                    </div>
                </div>
            );
        })}
        
        <Button variant="contained" className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
onClick={() => addQuestions()}>'質問を追加'</Button>
        
        <Button component="button" variant="contained" type="submit">設定の確認</Button>
        </form>
        {/*</AuthenticatedLayout>*/}
        </>
    );
}