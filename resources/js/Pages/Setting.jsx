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
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import '../../css/setting.css';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import Questions from '@/Components/Question/Questions';
import Category from '@/Components/Questionaire/Category';
import Radio2G from '@/Components/Questionaire/Radio2G';
import SurveyPass from '@/Components/Questionaire/SurveyPass';
import UsersSetting from '@/Components/Questionaire/UsersSetting';

export default function Setting({ categories, settings, auth}){
    
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        overview: '',
        category_id: '',
        show_question_count: '',
        is_logined: '',
        setting:[],
        password:[],
        provisional: 0,
    });
    
    {/*category*/}
    const [category, setCategory] = React.useState('');
    const handleChange = (event) => {
    setCategory(event.target.value);
    };
    
    {/*Password*/}
    const [passwords, setPasswords] = useState([]);
    const addPasswords = () => {
        setPasswords((prevPasswords) => ([ ...prevPasswords, "" ]));
    };
    
    function changeDisplay(){
    document.getElementById('password') . style . display = "inline";
    }

    function returnDisplay(){
    document.getElementById('password') . style . display = "none";
    }
    
    
    
    const submit = (e) => {
        e.preventDefault();

        //post(route('login'));
    };
    
    return(
        <>
        <form onSubmit={submit}>
        
        <Questions title='アンケート名' label={''} placeholder={'好きな食べ物は何ですか？'} postData={(e) => setData("name", e.target.value)}/>
        
        <Questions title='アンケートの説明' label={'説明文'} placeholder={'このアンケートの目的は〇〇です'} postData={(e) => setData("overview", e.target.value)}/>
        
        <Category postData={(e) => setData("category", e.target.value)} category={category} handleChange={handleChange} categories={categories}/>
        
        <Radio2G title='設問数の表示' label1='表示する' label2='表示しない' func1={''} func2={''} postData={(e) => setData("show_question_count", e.target.value)}/>
        
        <div>
           <Radio2G title='アンケートの種類' label1='プライベート' label2='パブリック' func1={returnDisplay} func2={changeDisplay} postData={(e) => setData("setting", e.target.value)}/>
           <SurveyPass postData={(e) => setData("password", e.target.value)} passwords={passwords} addPasswords={addPasswords}/>
        </div>
        
        <Radio2G title='アプリへのログイン' label1='必要' label2='不要' func1={''} func2={''} postData={(e) => setData("is_logined", e.target.value)}/>
        
        <UsersSetting title='回答を閲覧できるユーザー' smaller={3} bigger={6} postData={(e) => setData("setting", e.target.value)} settings={settings}/>
        
        <UsersSetting title='回答を分析できるユーザー' smaller={7} bigger={10} postData={(e) => setData("setting", e.target.value)} settings={settings}/>
        
        <Button component="button" variant="contained" className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2" type="submit">質問の作成</Button>
        </form>
        </>
        );
}