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

export default function Create({ questionaire, methods, auth}) {
    
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
          <h8>{ questionaire.name }</h8>
        </div>
        
        <form onSubmit={submit}>
        
        <div>
          <Title title='【質問】'/>
          <TextField label="質問文" placeholder='好きな食べ物は何ですか？' variant="standard"/>
        </div>
        
        {/*<div className="method">*/}
        <div>
            <FormControl>
              <Title title='【回答方法】'/>
              <RadioGroup>
                {methods.map(method=>{
                    return (
                    <FormControlLabel value={method.id} control={<Radio />} label={method.method} />
                    )
                })}
              </RadioGroup>
            </FormControl>
        </div>
        
        <div id='choice' className="choice">
          <Title title='選択肢を作成してください'/>
          <TextField placeholder='りんご' variant="standard"/>
          <TextField placeholder='バナナ' variant="standard"/>
             {choices.map((choice,index) => {
                return(
                <TextField variant="standard"/>
                )
              })}
          <Button variant="contained" className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
onClick={() => addChoices()}>+</Button>
        </div>
    
        
        <div id="limitedDescriptions" className="limitedDescriptions">
            <Title title='入力を許可する文字を選択してください。'/>
            <FormControl>
            {limiteds.map((limited,index)=>{
            return (
                <FormControlLabel value={index+1} control={<Checkbox />} label={limited} />
                )
            })}
            </FormControl>
        </div>
        
        <div id="slider" className="slider">
          <TextField label="最小値" placeholder='1' variant="standard"/>
          <TextField label="最大値" placeholder='100' variant="standard"/>
          <TextField label="左" placeholder='低い' variant="standard"/>
          <TextField label="右" placeholder='高い' variant="standard"/>
        </div>
        
        <div id="data" className="data">
          <Title title='アップロードを許可するファイルの個数を選択してください。'/>
          <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={number}
          label="Number"
          onChange={handleChange}
        >
            {Array(10).fill(0).map((val, i) => {
                return(
                <MenuItem value={i+1}>{i+1}</MenuItem>
                )})
            }
          </Select>
          
        </div>
        
        <div className="setting">
          <Title title='【設定】'/>
          <FormControlLabel control={<Checkbox />} value="1" label="字数" />
          <FormControlLabel control={<Checkbox />} value="2" label="表示" />
          <FormControlLabel control={<Checkbox />} value="3" label="画像" />
          <FormControlLabel control={<Checkbox />} value="4" label="必須" />
        </div>
        
        <Button component="button" variant="contained" type="submit">設定の確認</Button>
        </form>
        {/*</AuthenticatedLayout>*/}
        </>
    );
}