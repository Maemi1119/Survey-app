import React, { useState,useCallback } from 'react';
import { useForm } from '@inertiajs/inertia-react';
import Button from '@mui/material/Button';
import Questions from '@/Components/Question/Questions';
import Methods from '@/Components/Question/Methods';
import Choices from '@/Components/Question/Choices';    
import LimitedDescriptions from '@/Components/Question/LimitedDescriptions';
import SliderSettings from '@/Components/Question/SliderSettings';
import Data from '@/Components/Question/Data';
import QuestionSettings from '@/Components/Question/QuestionSettings';
import Grid from '@mui/material/Grid';

export default function Create({ questionaires, methods, auth, addQuestions, num}) {
    
    {/*choice*/}
    const [choices, setChoices] = useState([]);
    const addChoices = useCallback(() => {
        setChoices((prevChoices) => ([ ...prevChoices, "" ]));
    });
    const handleChoice = useCallback((event) =>{
        const name=event.target.name;
        const value=event.target.value;
    
        if (data.choice.length == 0) {
            setData('choice', [{[name]: value}]); 
        }else if(data.choice.length==1){
            if(Object.keys(data.choice[0])==name){
                setData('choice', data.choice.map((choice, index) => (Object.keys(choice)[0] === name ? {[name]: value} : choice)));
            }else{
                setData('choice', [...data.choice,{[name]:value}]);
            }
        }else{
            let check = false;
            
            data.choice.forEach((choice,index)=>{
                if(Object.keys(choice)[0]==name){
                    setData('choice', data.choice.map((choice, index) => (Object.keys(choice)[0] === name ? {[name]: value} : choice)));
                    check = true;
                }
            });
         
            if(!check){
                setData('choice', [...data.choice,{[name]:value}]);
            }
        }
    });
    
    const { data, setData } = useForm({
        question: '',
        method:'',
        choice:[],
        limited:[],
        min_value:'',
        max_value:'',
        bar_left:'',
        bar_right:'',
        data:'',
        image:'',
        required:'',
        setting:[],
    });
    
    // console.log(data);
    
    {/*制限*/}
    const limiteds = ['数字','ひらがな','カタカナ','日本語','アルファベット'];

    {/*データの個数*/}
    const [number, setNumber] = React.useState('');
    const handleChange = (event) => {
    setNumber(event.target.value);
    setData("image", event.target.value);
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
    
    const handleLimitedList = useCallback((e) => {
        if (data.limited.includes(String(e.target.value))) {
            removeLimited(e);
        } else {
            setData("limited", [...data.limited, e.target.value]);
        }
    });

    const removeLimited = (e) => {
        const settingLimited = data.limited.filter((value) => !( value == e.target.value ));
        setData("limited", settingLimited);
    };
    
    return (
        <>
            <div className="border-2 p-4">
                <Questions title='【質問】' label={'質問文'} placeholder={'好きな食べ物は何ですか？'} postData={(e) => setData("question", e.target.value)}/>
                
                <Grid container>
                    <Grid item xs={4}>
                        <Methods postData={(e) => setData("method", e.target.value)} methods={methods}/>
                    </Grid>
                    
                    <Grid item xs={4}>
                        {data.method==1 && <Choices placeholder={'りんご'} placeholder2={'バナナ'} choices={choices} addChoices={addChoices} handleChoice={handleChoice}/>}
                        
                        {data.method==3 && <LimitedDescriptions handleLimitedList={handleLimitedList} limiteds={limiteds}/>}
                        
                        {data.method==4 && <SliderSettings minPost={(e) => setData("min_value", e.target.value)} maxPost={(e) => setData("max_value", e.target.value)} leftPost={(e) => setData("bar_left", e.target.value)} rightPost={(e) => setData("bar_right", e.target.value)} />}
                        
                        {data.method==5 && <Data number={number} handleChange={handleChange}/>}
                    </Grid>
                    
                    <Grid item xs={4}>
                        <QuestionSettings questionSettings={questionSettings} data={data} postData={handleSettingList} questionaires={questionaires}/>
                    </Grid>
                </Grid>
            </div>
            
            <div className="my-8">
                <Button variant="contained" onClick={() => addQuestions(data, num)} className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
                    保存
                </Button>
            </div>
        </>
    );
}