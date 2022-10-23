import React, { useState } from 'react';
import { useForm } from '@inertiajs/inertia-react';
import Title from '@/Components/Title';
import Button from '@mui/material/Button';
import Questions from '@/Components/Question/Questions';
import Methods from '@/Components/Question/Methods';
import Choices from '@/Components/Question/Choices';    
import LimitedDescriptions from '@/Components/Question/LimitedDescriptions';
import SliderSettings from '@/Components/Question/SliderSettings';
import Data from '@/Components/Question/Data';
import QuestionSettings from '@/Components/Question/QuestionSettings';
import Stack from '@mui/material/Stack';

export default function Create({ questionaires, methods, auth, addQuestions}) {
    
    {/*choice*/}
    const [choices, setChoices] = useState([]);
    const addChoices = () => {
        setChoices((prevChoices) => ([ ...prevChoices, "" ]));
      };
    
    const { data, setData, post, processing, errors, reset } = useForm({
        question: '',
        method:'',
        choice:[],
        limited:[],
        min_value:'',
        max_value:'',
        bar_left:'',
        bar_right:'',
        data:'',
        
        required:'',
        setting:[],
    });
    
    console.log(data);
    
    {/*制限*/}
    const limiteds = ['数字','ひらがな','カタカナ','日本語','アルファベット'];

    {/*データの個数*/}
    const [number, setNumber] = React.useState('');
    const handleChange = (event) => {
    setNumber(event.target.value);
    };
    
    {/*設定*/}
    const questionSettings = ['字数','表示','画像','必須','分岐'];
    
    const handleSettingList = (e) => {
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

    const submit = (e) => {
        e.preventDefault();

        post('/create/'+questionaires.id);
    };
    
    return (
        <>
            <form onSubmit={submit}>
            
                <Questions title='【質問】' label={'質問文'} placeholder={'好きな食べ物は何ですか？'} postData={(e) => setData("question", e.target.value)}/>
                
                <Methods postData={(e) => setData("method", e.target.value)} methods={methods}/>
                
                <div>
                    {data.method==1&& <Choices placeholder={'りんご'} placeholder2={'バナナ'} postData={(e) => setData("choice",[...data.choice, e.target.value])} choices={choices} addChoices={addChoices}/>}
                    
                    {data.method==3&& <LimitedDescriptions postData={(e) => setData("limited", e.target.value)} limiteds={limiteds}/>}
                    
                    {data.method==4&& <SliderSettings minPost={(e) => setData("min_value", e.target.value)} maxPost={(e) => setData("max_value", e.target.value)} leftPost={(e) => setData("bar_left", e.target.value)} rightPost={(e) => setData("max_value", e.target.value)} />}
                    
                    {data.method==5&& <Data postData={(e) => setData("data", e.target.value)} number={number} handleChange={handleChange}/>}
                </div>
                
                <QuestionSettings questionSettings={questionSettings} data={data} postData={handleSettingList} questionaires={questionaires}/>
                <Button component="button" variant="contained" type='submit' onClick={addQuestions} className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
    >保存</Button>
            </form>
        </>
    );
}