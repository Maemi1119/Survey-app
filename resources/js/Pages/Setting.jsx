import React, { useState,useEffect } from 'react';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
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

export default function Setting({ categories, settings, auth}){
    
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        overview: '',
        category_id: '',
        sho_question_count: '',
        is_logined: '',
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
        setPasswords((prevPosswords) => ([ ...prevPosswords, "" ]));
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
        <div>
            <Title title='アンケート名'/>
            <TextField placeholder='好きな食べ物は何ですか？' variant="standard"/>
        </div>
        
        <div>
            <Title title='アンケートの説明'/>
            <TextField placeholder='このアンケートの目的は〇〇です。' variant="outlined"/>
        </div>
        
        <div>
            <Title title='カテゴリー'/>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={category}
              label="Category"
              onChange={handleChange}
            >
                <MenuItem value=''>選択しない</MenuItem>
                {categories.map(category=>{
                    return (
                    <MenuItem value={category}>{category}</MenuItem>
                    );
                })}
            </Select>
        </div>
        
        <div>
            <Title title='設問数の表示'/>
            <RadioGroup>
            <FormControlLabel value={1} control={<Radio />} label='表示する'/>
            <FormControlLabel value={2} control={<Radio />} label='表示しない'/>
            </RadioGroup>
        </div>
        
        <div>
           <Title title='アンケートの種類'/> 
           <RadioGroup>
            <FormControlLabel value={1} control={<Radio />} label='パブリック' onClick={returnDisplay}/>
            <FormControlLabel value={2} control={<Radio />} label='プライベート' onClick={changeDisplay}/> 
           </RadioGroup>
        </div>
        
        <div id='password'>
            <TextField label="password" variant="standard"/>
            {passwords.map((possword,index) => {
                return(
                <TextField variant="standard"/>
                );
            })}
            <Button variant="contained" className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
onClick={() => addPasswords()}>+</Button>
        </div>
        
        <div>
        <Title title='アプリへのログイン'/>
        <RadioGroup>
        <FormControlLabel value={1} control={<Radio />} label='必要'/>
        <FormControlLabel value={2} control={<Radio />} label='不要'/>
        </RadioGroup>
        </div>
        
        <div>
        <Title title='回答を閲覧できるユーザー'/>
        {settings.map(setting=>
            (
                <div>
                {(setting.id>=3 && setting.id<=6) && 
                    <FormControlLabel control={<Checkbox />} value={setting.id} label={setting.setting}/>
                }
                </div>
            )
        )}
        </div>
        
        <div>
        <Title title='回答を分析できるユーザー'/>
        {settings.map(setting=>
            {return(
                <div>
                {(setting.id>=7 && setting.id<=10) && 
                    <FormControlLabel control={<Checkbox />} value={setting.id} label={setting.setting}/>
                }
                </div>
            )}
        )}
        </div>
        </form>
        </>
        );
}