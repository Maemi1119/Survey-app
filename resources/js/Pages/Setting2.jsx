import React, { useState,useCallback } from 'react';
import { useForm } from '@inertiajs/inertia-react';
import Button from '@mui/material/Button';
// import '../../css/setting.css';
import Questions from '@/Components/Question/Questions';
import Category from '@/Components/Questionaire/Category';
import Radio2G from '@/Components/Questionaire/Radio2G';
import SurveyPass from '@/Components/Questionaire/SurveyPass';
import UsersSetting from '@/Components/Questionaire/UsersSetting';
import TextField from '@mui/material/TextField';
import Header from '@/Components//Header';

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
    
    // パブリック、プライベートのバリデーション
    const kindVali = () => {
        
        // パブリック・ブライベートのどちらかが選択されている場合
        if (data.setting.includes(String(1)) || data.setting.includes(String(2))) {
            // ブライベートが選択されている場合
            if (data.setting.includes(String(2))) {
                // passwordsにプライベート設定のパスワードが含まれている
                if (data.passwords.filter(obj => obj.setting_id == 2 && obj.password.trim().length > 0).length > 0) {
                    return true;
                // パスワードがない
                } else {
                    return false;
                }
            // パブリックが選択されている場合。パスワードチェック不要
            } else {
                return true;
            }
            
        // どちらも選択されていない場合
        } else {
            return false;
        }
    };
    
    // 閲覧の設定のバリデーション
    const browseVali = () =>{
        
        // 閲覧の設定が選択されている
        if (data.setting.filter(item => Number(item) >= 3 && Number(item) <= 6).length > 0) {
            // 閲覧のパスワード設定を選択したとき
            if (data.setting.includes(String(6))) {
                // passwordsに閲覧設定のパスワードが含まれている
                if (data.passwords.filter(obj => obj.setting_id == 6 && obj.password.trim().length > 0).length != 0) {
                    return true;
                // パスワードがない
                } else {
                    return false;
                }
            } else {
                return true;
            }
        
        // 何も選択されていない
        } else {
            return false;
        }
    };
    
    // 分析の設定のバリデーション
    const analysisVali = () => {
        // 分析の設定が選択されている
        if (data.setting.filter(item => Number(item) >= 7 && Number(item) <= 10).length > 0) {
            // 分析のパスワード設定を選択したとき
            if (data.setting.includes(String(10))) {
                // passwordsに分析設定のパスワードが含まれている
                if (data.passwords.filter(obj => obj.setting_id == 10 && obj.password.trim().length > 0).length != 0) {
                    return true;
                // パスワードがない
                } else {
                    return false;
                }
            } else {
                return true;
            }
        
        // 何も選択されていない
        } else {
            return false;
        }
    };
    
    const validation = () => {
        const name = data.name;
        const showCount = data.show_question_count;
        const login = data.is_logined;
        
        if ((name.trim().length !== 0) && (showCount.length != 0) && (login.length != 0)){ 
            return true;
        }else{
            return false;
        }
    };
    
    // パスワード以外の入力関連
    const handleChange = useCallback((e) => {
        const name = e.target.name;
        const value = e.target.value;
        let newSetting = data.setting;
        
        if (name == "setting") { // settingの場合
            newSetting.push(value);
            
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
    
    // パスワード入力解除
    const removePass = useCallback((e, setting_id) => {
        const newPasswordForms = [...passwords];
        const index = Number(setting_id.split('_')[1]);
        newPasswordForms.splice(index, 1);
        setPasswords(newPasswordForms);
        setData("passwords", data.passwords.filter(obj => obj.setting_id != setting_id));
    });
    
    const submit = () => {
        if (kindVali() && browseVali() && analysisVali() && validation()) {
            post('/setting');
        }
    };
    
    return(
        <>
            <Header>アンケート設定</Header>
            
            <div className="w-4/5 mx-auto my-10">
            
                <Questions required={true} title='アンケート名' name="name" placeholder='好きな食べ物は何ですか？' postData={handleChange}/>
                
                <Questions title='アンケートの説明' name="overview" placeholder='このアンケートの目的は〇〇です' postData={handleChange}/>
                
                {/*<Category postData={(e) => setData("category_id", e.target.value)} categories={categories}/>*/}
                
                <Radio2G required={true} title='設問数の表示' name="show_question_count" label={['表示する','表示しない']} postData={handleChange}/>
                
                <div>
                    <Radio2G required={true} title='アンケートの種類' name="setting" label={['パブリック', 'プライベート']} postData={handleChange}/>
                    {data.setting.includes(String(2)) &&
                        <SurveyPass value="2" postData={handlePasswords} passwords={passwords} addPasswords={addPasswords} removePass={removePass} data={data} />
                    }
                </div>
                
                <Radio2G required={true} title='アプリへのログイン' name="is_logined" label={['必要','不要']} postData={handleChange}/>
                
                <UsersSetting required={true} title='回答を閲覧できるユーザー' smaller={3} bigger={6} settings={settings} handleList={handleChange}/>
                {data.setting.includes(String(6)) &&
                    <TextField label="password" variant="standard" onChange={(e) => handlePasswords(e, 6)}/>
                }
                
                <UsersSetting required={true} title='回答を分析できるユーザー' smaller={7} bigger={10} settings={settings} handleList={handleChange}/>
                {data.setting.includes(String(10)) &&
                    <TextField label="password" variant="standard" onChange={(e) => handlePasswords(e, 10)}/>
                }
                
                <div>
                    <Button color="warning" variant="contained" onClick={()=>submit()} type="submit">質問の作成</Button>
                </div>
            </div>
        </>
    );
}