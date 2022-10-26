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

export default function Setting2({ categories, settings, auth}){
    
    const { data, setData, post } = useForm({
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
    }
    */}
    console.log(data);
    console.log(passwords)
    
    // パスワード以外の入力関連
    const handleChange = useCallback((e) => {
        const name = e.target.name;
        const value = e.target.value;
        let newSetting = data.setting;
        
        if (name == "setting") { // settingの場合
            newSetting.push(value);
            
            let except;  // 削除要素対象
            if (value == 1 || value == 2) {
                const except = value == 1 ? "2" : "1";
                newSetting = newSetting.filter(item => item !== except);
            } else if(newSetting.filter(item => item == value).length % 2 == 0) {
                newSetting = newSetting.filter(item => item !== value);
            }
            
            setData("setting", newSetting);
        } else { // それ以外の場合
            setData(name, value);
        }
    });
    
    // パスワード入力
    const handlePasswords = useCallback((e, value) => {
        if (data.passwords.filter(obj => obj.setting_id == value).length > 0) {
            setData("passwords", data.passwords.map(obj => obj.setting_id == value ? { setting_id: obj.setting_id, password: e.target.value } : obj));
        } else {
            setData("passwords", [...data.passwords, { setting_id: value, password: e.target.value }]);
        }
    });
    
    const removePass = useCallback((e, setting_id) => {
        const newPasswordForms = [...passwords];
        const index = Number(setting_id.split('_')[1]);
        newPasswordForms.splice(index, 1);
        setPasswords(newPasswordForms);
        setData("passwords", data.passwords.filter(obj => obj.setting_id != setting_id));
    });
    
    const submit = (e) => {
        e.preventDefault();

        // post('/setting');
    };
    
    return(
        <div className="w-4/5 m-auto mt-5">
            <form onSubmit={submit}>
                <Questions title='アンケート名' name="name" placeholder='好きな食べ物は何ですか？' postData={handleChange}/>
                
                <Questions title='アンケートの説明' name="overview" placeholder='このアンケートの目的は〇〇です' postData={handleChange}/>
                
                {/*<Category postData={(e) => setData("category_id", e.target.value)} categories={categories}/>*/}
                
                <Radio2G title='設問数の表示' name="show_question_count" label={['表示する','表示しない']} postData={handleChange}/>
                
                <div>
                    <Radio2G title='アンケートの種類' name="setting" label={['パブリック', 'プライベート']} postData={handleChange}/>
                    {data.setting.includes(String(2)) &&
                        <SurveyPass value="2" postData={handlePasswords} passwords={passwords} addPasswords={addPasswords} removePass={removePass} data={data} />
                    }
                </div>
                
                <Radio2G title='アプリへのログイン' name="is_logined" label={['必要','不要']} postData={handleChange}/>
                
                <UsersSetting title='回答を閲覧できるユーザー' smaller={3} bigger={6} settings={settings} handleList={handleChange}/>
                {data.setting.includes(String(6)) &&
                    <TextField label="password" variant="standard" onChange={(e) => handlePasswords(e, 6)}/>
                }
                
                <UsersSetting title='回答を分析できるユーザー' smaller={7} bigger={10} settings={settings} handleList={handleChange}/>
                {data.setting.includes(String(10)) &&
                    <TextField label="password" variant="standard" onChange={(e) => handlePasswords(e, 10)}/>
                }
                
                <Button component="button" variant="contained" className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2" type="submit">
                    質問の作成
                </Button>
            </form>
        </div>
    );
}