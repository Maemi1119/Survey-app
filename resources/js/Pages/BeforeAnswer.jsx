import React, { useState, useEffect, useCallback } from 'react';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm } from '@inertiajs/inertia-react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Header from '@/Components/Header';
import TextField from '@mui/material/TextField';

export default function BeforeAnswer({questionaires,settings,auth,errors}){
    const { data, setData, post } = useForm({
        password: '',
    });
    
    const enterPass = useCallback((e) => {
        setData('password', e.target.value);
    });
    
    const submit = () =>{
        post('/checkpass/'+questionaires.id);
    };
    return(
        <>
            <Header>アンケート回答</Header>
            <h4 className="font-bold text-2xl mt-4">{questionaires.name}</h4>
            {settings.includes(1) ? (
                <>
                    <p>アンケートへの回答を始めますか？</p>
                    <Button color="warning" variant="contained" href={'/startanswer/'+questionaires.id}>始める</Button>
                </>
            ) : (
                <>
                   <p>このアンケートに回答するためにはパスワードの入力が必要です。</p>
                   <TextField variant="standard" onChange={(e) => enterPass(e)}/>
                   <p color='red'>{errors.missing}</p>
                   <Button color="warning" variant="contained" onClick={submit}>確認</Button>
                </>
            )}
        </>
        );
}