import React, { useState,useCallback } from 'react';
import { useForm } from '@inertiajs/inertia-react';
import Button from '@mui/material/Button';
import '../../css/setting.css';
import Questions from '@/Components/Question/Questions';
import Category from '@/Components/Questionaire/Category';
import Radio2G from '@/Components/Questionaire/Radio2G';
import SurveyPass from '@/Components/Questionaire/SurveyPass';
import UsersSetting from '@/Components/Questionaire/UsersSetting';
import TextField from '@mui/material/TextField';

export default function Setting({ categories, settings, auth}){
    
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        overview: '',
        category_id: '',
        show_question_count: '',
        is_logined: '',
        passwords:[],
        setting:[],
        provisional: 0,
    });
    
    // Password
    const [passwords, setPasswords] = useState([]);
    const addPasswords = useCallback(() => {
        setPasswords((prevPasswords) => ([ ...prevPasswords, "" ]));
    });
    
    function changeDisplay(){
    document.getElementById('password') . style . display = "inline";
    }
    function returnDisplay(){
    document.getElementById('password') . style . display = "none";
    }
    
    const handleSettingIdList = (e) => {
        if (data.setting.includes(String(e.target.value))) {
            removeId(e);
        } else {
            setData("setting", [...data.setting, e.target.value]);
        }
    };

    const removeId = (e) => {
        const settingData = data.setting.filter((value) => !( value == e.target.value ));
        setData("setting", settingData);
    };

{/*
    const validation = (data) => {
        const name = data.name;
        const showCount = data.show_question_count;
        const login = data.is_logined;
        if ((name.trim().length !== 0) && (showCount !== "") && (login !== "") && (setting !== "")){ 
            return true;
        }else{
            return false;
        }
    };
    
    const kindVali = (data) =>{
        const kind = data.kind;
        const kPass = data.passwords.filter();
        if(kind !== ""){
            if(kPass){
                
            }else{
                return false;
            }
        }else{
            return false;
        }
    }
    
    const settVali = (data) =>{
        const setting = data.setting;
        const sPass = data.passwords.filter();
        if(setting !== ""){
            if(sPass){
                
            }else{
                return false;
            }
        }else{
            return false;
        }
    }*/}
    
    const submit = (e) => {
        e.preventDefault();
        post('/setting');
    };
    
    return(
        <div className="w-4/5 m-auto mt-5">
            <form onSubmit={submit}>
                <Questions title='アンケート名' placeholder='好きな食べ物は何ですか？' postData={(e) => setData("name", e.target.value)}/>
                
                <Questions title='アンケートの説明' label='説明文' placeholder='このアンケートの目的は〇〇です' postData={(e) => setData("overview", e.target.value)}/>
                
                {/*<Category postData={(e) => setData("category_id", e.target.value)} categories={categories}/>*/}
                
                <Radio2G title='設問数の表示' label1='表示する' label2='表示しない' postData={(e) => setData("show_question_count", e.target.value)}/>
                
                <div>
                   <Radio2G title='アンケートの種類' label1='パブリック' label2='プライベート' func1={returnDisplay} func2={changeDisplay} postData={(e) => setData("setting", e.target.value)}/>
                   <SurveyPass postData={(e) => setData("passwords", [...data.passwords,{"setting_id":2,"password":e.target.value}])} passwords={passwords} addPasswords={addPasswords}/>
                </div>
                
                <Radio2G title='アプリへのログイン' label1='必要' label2='不要' postData={(e) => setData("is_logined", e.target.value)}/>
                
                <UsersSetting title='回答を閲覧できるユーザー' smaller={3} bigger={6}  settings={settings} handleList={handleSettingIdList}/>
                {data.setting.includes(String(6))&& <TextField label="password" variant="standard" onChange={(e) => setData("passwords", [...data.passwords,{"setting_id":6,"password":e.target.value}])}/>}
                <UsersSetting title='回答を分析できるユーザー' smaller={7} bigger={10} settings={settings} handleList={handleSettingIdList}/>
                {data.setting.includes(String(10))&& <TextField label="password" variant="standard" onChange={(e) => setData("passwords", [...data.passwords,{"setting_id":10,"password":e.target.value}])}/>}
                <Button component="button" variant="contained" className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2" type="submit">質問の作成</Button>
            </form>
        </div>
    );
}