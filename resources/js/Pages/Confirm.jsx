import React, { useState } from 'react';
import {Inertia} from "@inertiajs/inertia";
import { Link,useForm } from '@inertiajs/inertia-react';
import Title from '@/Components/Title';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import ShowText from '@/Components/ShowText';
import Stack from '@mui/material/Stack';
import Modify from '@/Components/Modify';
import ClassModify from '@/Components/ClassModify';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import Questions from '@/Components/Question/Questions';
import Category from '@/Components/Questionaire/Category';
import Radio2G from '@/Components/Questionaire/Radio2G';
import UsersSetting from '@/Components/Questionaire/UsersSetting';

export default function Confirm({ questionaires, categories, settings, passwords, sett,auth}){
    
    const { data, setData, post, processing, errors, reset } = useForm({
        name: questionaires.name,
        overview: questionaires.overview,
        category_id: questionaires.category_id,
        show_question_count: questionaires.show_question_count,
        is_logined: questionaires.is_logined,
        setting:[],
        password:[],
        provisional: 1
    });
    
    {/*modify*/}
    function showModifyName(){
        document.getElementById('name') . style . display = "inline";
        setOpen((prevOpen)=>({...prevOpen,name:false}));
        }
    function showModifyOverview(){
        document.getElementById('overview') . style . display = "inline";
        setOpen((prevOpen)=>({...prevOpen,overview:false}));
        }
    function showModifyCategory(){
        document.getElementById('category') . style . display = "inline";
        }    
    function showModifyShowQuestionCount(){
        document.getElementById('show_question_count') . style . display = "inline";
        }    
    function showModifyKind(){
        document.getElementById('kind') . style . display = "inline";
        }   
    function showModifyLogined(){
        document.getElementById('is_logined') . style . display = "inline";
        }
    function showModifyUser1(){
        document.getElementById('user1') . style . display = "inline";
        }
    function showModifyUser2(){
        document.getElementById('user2') . style . display = "inline";
        }
    
    {/*OK*/}
    const [current,setCurrent] = useState({
        name:questionaires.name,
        overview:questionaires.overview,
        category:categories.category,
        count:questionaires.show_question_count,
        kind:questionaires.kind,
        pass:questionaires.pass,
        logined:questionaires.is_logined,
        user1:settings.filter(setting => setting.id>=3 && setting.id<=6),
        user2:settings.filter(setting => setting.id>=7 && setting.id<=10)
    });
    console.log(current.user2);
    const [newCurrent,setNewCurrent] = useState({
        name:questionaires.name,
        overview:questionaires.overview,
        category:categories.category,
        count:questionaires.show_question_count,
        kind:questionaires.kind,
        pass:questionaires.pass,
        logined:questionaires.is_logined,
        user1:[],
        user2:[]
    });
    
    const [open,setOpen] = useState({
        name:true,
        overview:true,
        category:true,
        count:true,
        kind:true,
        pass:true,
        logined:true,
        user1:true,
        user2:true
    });
    
    const changeName = (name) => {
        setCurrent((prevCurrent) => ({...prevCurrent, name:name}));
        hideModifyName();
      };
    
    const changeOverview = (overview) => {
        setCurrent((prevCurrent) => ({...prevCurrent, overview:overview}));
        hideModifyOverview();
      };
    
    const changeUser2 = () => {
        console.log('niku');
      };
    
    
    {/*const [name, setName] = useState(questionaires.name);
    
    const [overview, setOverview] = useState('');
    const changeOverview = () => {
        setOverview((prevOverview) => (""));
      }
    const [category, setCategory] = useState('');
    const changeCategory = () => {
        setCategory((prevCategory) => (""));
      }
    const [count, setCount] = useState('');
    const changeShowQuestionCount = () => {
        setCount((prevCount) => (setCount));
      }
    const [kind, setKind] = useState('');
    const changeKind = () => {
        setKind((prevKind) => (""));
      }
    const [pass, setPass] = useState([]);
    const changePass = () => {
        setPass((prevPass) => ([""]));
      }
    const [logined, setLogined] = useState('');
    const changeLogined = () => {
        setLogined((prevLogined) => (""));
      }
    const [user1, setUser1] = useState([]);
    const changeUser1 = () => {
        setUser1((prevUser1) => ([""]));
      }
    const [user2, setUser2] = useState([]);
    const changeUser2 = () => {
        setUser2((prevUser2) => ([""]));
      }*/}
      
    {/*cancel*/}
    function hideModifyName(){
        document.getElementById('name') . style . display = "none";
        setOpen((prevOpen)=>({...prevOpen,name:true}));
        }
    function hideModifyOverview(){
        document.getElementById('overview') . style . display = "none";
        setOpen((prevOpen)=>({...prevOpen,overview:true}));
        }
    function hideModifyCategory(){
        document.getElementById('category') . style . display = "none";
        }    
    function hideModifyShowQuestionCount(){
        document.getElementById('show_question_count') . style . display = "none";
        }    
    function hideModifyKind(){
        document.getElementById('kind') . style . display = "none";
        }   
    function hideModifyLogined(){
        document.getElementById('is_logined') . style . display = "none";
        }
    function hideModifyUser1(){
        document.getElementById('user1') . style . display = "none";
        setOpen((prevOpen)=>({...prevOpen,user1:true}));
        }
    function hideModifyUser2(){
        document.getElementById('user2') . style . display = "none";
        setOpen((prevOpen)=>({...prevOpen,user2:true}));
        }
    
    {/*category
    const handleChange = (event) => {
    setCategory(event.target.value);
    };*/}
    
    {/*Password*/}
    const addPass = () => {
        setPass((prevPass) => ([ ...prevPass, "" ]));
    };
    
    function changeDisplay(){
    document.getElementById('password') . style . display = "inline";
    }

    function returnDisplay(){
    document.getElementById('password') . style . display = "none";
    }
    
    const handleUser2List = (e) => {
        console.log(newCurrent.user2);
        if (newCurrent.user2.includes(String(e.target.value))) {
            removeId(e);
        } else {
            setNewCurrent(prevNewCurrent =>({...prevNewCurrent, user2:[...prevNewCurrent.user2, e.target.value]}));
        }
    };

    const removeId = (e) => {
        const settingData = newCurrent.user2.filter((value) => !( value == e.target.value ));
        setNewCurrent(prevNewCurrent =>({...prevNewCurrent, user2:[...prevNewCurrent.user2, settingData]}));
    };
    
    const submit = (e) => {
        e.preventDefault();
        Inertia.get('/preview/'+questionaires.id);
        //post(/setting/);
    };
    
    return(
        <>
        <form onSubmit={submit}>
        <div>
            <Title title='アンケート名'/>
            <p>{current.name}</p>
            {/*{open.name&&
            <Modify FunctionName={showModifyName} />
            }*/}
        </div>
        
        {/*
        <ClassModify
            id='name'
            content={<Questions title='アンケート名' postData={(e) => setNewCurrent((prevNewCurrent)=>({...prevNewCurrent,name:e.target.value}))}/>}
            OK={() => changeName(newCurrent.name)}
            cancel={hideModifyName}
        />*/}
        
        <div>
            <Title title='アンケートの説明'/>
            <p>{current.overview}</p>
            {/*<Modify FunctionName={showModifyOverview} />*/}
        </div>
        
        {/*
        <ClassModify
            id='overview'
            content={<Questions title='アンケートの説明' label={'説明文'} postData={(e) => setNewCurrent((prevNewCurrent)=>({...prevNewCurrent,overview:e.target.value}))}/>}
            OK={() => changeOverview(newCurrent.overview)}
            cancel={hideModifyOverview}
        />*/}
        
        {/*<div>
            <Title title='カテゴリー'/>
            <p>{categories.category}</p>
            {/*<Modify FunctionName={showModifyCategory} />
        </div>
        
        <ClassModify
            id='category'
            content={<Category />}
            OK={changeCategory,hideModifyCategory}
            cancel={hideModifyCategory}
        />*/}
        
        <div>
            <Title title='設問数の表示'/>
            <ShowText
                value={questionaires.show_question_count}
                content1='表示する'
                content2='表示しない'
            />
            {/*<Modify FunctionName={showModifyShowQuestionCount} />*/}
        </div>
        
        {/*
        <ClassModify
            id='show_question_count'
            title='設問数の表示'
            content={
                <Radio2G 
                    title='設問数の表示'
                    label1='表示する'
                    label2='表示しない'
                />
            }
            OK={changeShowQuestionCount,hideModifyShowQuestionCount}
            cancel={hideModifyShowQuestionCount}
        />*/}
        
        <div>
           <Title title='アンケートの種類'/> 
           <ShowText
                content1='パブリック'
                content2='プライベート'
            />
            <div>
                {passwords.map((password) => {
                    return(
                        <div>
                        {(settings.id==2) &&
                            <p>{password.password}</p>
                        }
                        </div>
                    );
                })}
            </div>
            {/*<Modify FunctionName={showModifyKind} />
            <Button variant="outlined" onClick={changeDisplay}>'パスワードの変更'</Button>*/}
        </div>
        
        {/*
        <ClassModify
            id='kind'
            title='アンケートの種類'
            content={
                <Radio2G 
                    title='アンケートの種類'
                    label1='プライベート'
                    label2='パブリック'
                />
            }
            OK={changeKind,hideModifyKind}
            cancel={hideModifyKind}
        />
        
        <div className='hidden' id='password'>
            {passwords.map(password => {
                return(
                <Stack direction="row" spacing={0}>
                <TextField variant="standard" value={password.password}/>
                <IconButton aria-label="delete"><DeleteIcon /></IconButton>
                </Stack>
                );
            })}
            {pass.map((password,index) => {
                return(
                <Stack direction="row" spacing={0}>
                <TextField variant="standard"/>
                <IconButton aria-label="delete"><DeleteIcon /></IconButton>
                </Stack>
                );
            })}
            <Button variant="contained" onClick={() => addPass()}>+</Button>
            <Stack direction="row" spacing={2}>
            <Button variant="contained" onClick={changePass,returnDisplay}>'決定'</Button>
            <Button variant="outlined" onClick={returnDisplay}>'キャンセル'</Button>
            </Stack>
        </div>*/}
        
        <div>
        <Title title='アプリへのログイン'/>
        <ShowText
                id={questionaires.is_logined}
                content1='表示する'
                content2='表示しない'
            />
        {/*<Modify FunctionName={showModifyLogined} />*/}
        </div>
        
        {/*
        <ClassModify
            id='is_logined'
            title='アプリへのログイン'
            content={
                <Radio2G  title='アプリへのログイン'
                    label1='必要'
                    label2='不要'
                    func1={''}
                    func2={''}
                />
            }
            OK={changeLogined,hideModifyLogined}
            cancel={hideModifyLogined}
        />*/}
        
        <div>
        <Title title='回答を閲覧できるユーザー'/>
            {current.user1.map(setting=>
                    {return(
                            <p>{setting.setting}</p>
                    )}
                )}
            {/*<Modify FunctionName={showModifyUser1} />*/}
        </div>
        
        {/*
        <ClassModify
            id='user1'
            title='回答を閲覧できるユーザー'
            content={
                <UsersSetting title='回答を閲覧できるユーザー' smaller={3} bigger={6} handleList={handleUser1List} />
            }
            OK={changeUser1}
            cancel={hideModifyUser1}
        />*/}
        
        <div>
        <Title title='回答を分析できるユーザー'/>
            {current.user2.map(setting=>
                {return(
                        <p>{setting.setting}</p>
                )}
            )}
            {/*<Modify FunctionName={showModifyUser2} />*/}
        </div>
        
        {/*
        <ClassModify
            id='user2'
            title='回答を分析できるユーザー'
            content={
                <UsersSetting title='回答を分析できるユーザー' settings={sett} smaller={7} bigger={10} handleList={handleUser2List}/>
            }
            OK={changeUser2}
            cancel={hideModifyUser2}
        />*/}
        
        <Button component="button" variant="contained" className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2" type="submit">アンケートのプレビュー</Button>
        </form>
        </>
        );
}