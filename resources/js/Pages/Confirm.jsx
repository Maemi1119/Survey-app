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
import ShowText from '@/Components/ShowText';
import Stack from '@mui/material/Stack';
import Modify from '@/Components/Modify';
import ClassModify from '@/Components/ClassModify';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

export default function Setting({ questionaires, categories, settings, passwords, auth}){
    
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        overview: '',
        category_id: '',
        show_question_count: '',
        is_logined: '',
        setting:[],
        password:[],
        provisional: 1
    });
    
    {/*modify*/}
    function showModifyName(){
        document.getElementById('name') . style . display = "inline";
        }
    function showModifyOverview(){
        document.getElementById('overview') . style . display = "inline";
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
    const [name, setName] = useState('');
    const changeName = () => {
        setName((prevName) => (""));
      }
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
        setCount((prevCount) => (""));
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
      }
      
    {/*cancel*/}
    function hideModifyName(){
        document.getElementById('name') . style . display = "none";
        }
    function hideModifyOverview(){
        document.getElementById('overview') . style . display = "none";
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
        }
    function hideModifyUser2(){
        document.getElementById('user2') . style . display = "none";
        }
    
    {/*category*/}
    const handleChange = (event) => {
    setCategory(event.target.value);
    };
    
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
    
    const submit = (e) => {
        e.preventDefault();

        //post(route('login'));
    };
    
    return(
        <>
        <form onSubmit={submit}>
        <div>
            <Title title='アンケート名'/>
            <p>{name.questionaires.name}</p>
            <Modify FunctionName={showModifyName} />
        </div>
        
        <ClassModify
            id='name'
            content={<Questions id={questionaires.id} title='アンケート名' label={''} value={questionaires.name} placeholder={''}/>}
            OK={changeName,hideModifyName}
            cancel={hideModifyName}
        />
        
        <div>
            <Title title='アンケートの説明'/>
            <p>{overview.questionaires.overview}</p>
            <Modify FunctionName={showModifyOverview} />
        </div>
        
        <ClassModify
            id='overview'
            content={<Questions id={questionaires.id} title='アンケートの説明' label={'説明文'} value={questionaires.overview} placeholder={''}/>}
            OK={changeOverview,hideModifyOverview}
            cancel={hideModifyOverview}
        />
        
        <div>
            <Title title='カテゴリー'/>
            <p>{category.categories.category}</p>
            <Modify FunctionName={showModifyCategory} />
        </div>
        
        <ClassModify
            id='category'
            content={<Category />}
            OK={changeCategory,hideModifyCategory}
            cancel={hideModifyCategory}
        />
        
        <div>
            <Title title='設問数の表示'/>
            <ShowText
                value={count.questionaires.show_question_count}
                content1='表示する'
                content2='表示しない'
            />
            <Modify FunctionName={showModifyShowQuestionCount} />
        </div>
        
        <ClassModify
            id='show_question_count'
            title='設問数の表示'
            content={
                <Radio2G 
                    title='設問数の表示'
                    label1='表示する'
                    label2='表示しない'
                    func1={''}
                    func2={''}
                />
            }
            OK={changeShowQuestionCount,hideModifyShowQuestionCount}
            cancel={hideModifyShowQuestionCount}
        />
        
        <div>
           <Title title='アンケートの種類'/> 
           <ShowText
                id={kind.settings.id}
                content1='パブリック'
                content2='プライベート'
            />
            <div>
                {pass.passwords.map((password) => {
                    return(
                        <div>
                        {(settings.id==2) &&
                            <p>{password.password}</p>
                        }
                        </div>
                    );
                })}
            </div>
            <Modify FunctionName={showModifyKind} />
            <Button variant="outlined" onClick={changeDisplay}>'パスワードの変更'</Button>
        </div>
        
        <ClassModify
            id='kind'
            title='アンケートの種類'
            content={
                <Radio2G 
                    title='アンケートの種類'
                    label1='プライベート'
                    label2='パブリック'
                    func1={''}
                    func2={''}
                />
            }
            OK={changeKind,hideModifyKind}
            cancel={hideModifyKind}
        />
        
        <div id='password'>
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
        </div>
        
        <div>
        <Title title='アプリへのログイン'/>
        <ShowText
                id={logined.questionaires.is_logined}
                content1='表示する'
                content2='表示しない'
            />
        <Modify FunctionName={showModifyLogined} />
        </div>
        
        <ClassModify
            id='is_logined'
            title='アプリへのログイン'
            content={
                <Radio2G 
                    title='アプリへのログイン'
                    label1='必要'
                    label2='不要'
                    func1={''}
                    func2={''}
                />
            }
            OK={changeLogined,hideModifyLogined}
            cancel={hideModifyLogined}
        />
        
        <div>
        <Title title='回答を閲覧できるユーザー'/>
        {/*省略形*/}
        {user1.settings.map(setting=>
            (
                <div>
                {(setting.id>=3 && setting.id<=6) && 
                    <p>{setting.setting}</p>
                }
                </div>
            )
        )}
        <Modify FunctionName={showModifyUser1} />
        </div>
        
        <ClassModify
            id='user1'
            title='回答を閲覧できるユーザー'
            content={
                <UsersSetting
                    title='回答を閲覧できるユーザー'
                    smaller={3}
                    bigger={6}
                />
            }
            OK={changeUser1,hideModifyUser1}
            cancel={hideModifyUser1}
        />
        
        <div>
        <Title title='回答を分析できるユーザー'/>
        {user2.settings.map(setting=>
            {return(
                <div>
                {(setting.id>=7 && setting.id<=10) && 
                    <p>{setting.setting}</p>
                }
                </div>
            )}
        )}
        <Modify FunctionName={showModifyUser2} />
        </div>
        
        <ClassModify
            id='user2'
            title='回答を分析できるユーザー'
            content={
                <UsersSetting
                    title='回答を分析できるユーザー'
                    smaller={7}
                    bigger={10}
                />
            }
            OK={changeUser2,hideModifyUser2}
            cancel={hideModifyUser2}
        />
        
        <Button component="button" variant="contained" className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2" type="submit">アンケートのプレビュー</Button>
        </form>
        </>
        );
}