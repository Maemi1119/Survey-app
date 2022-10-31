import React, { useState, useEffect, useCallback } from 'react';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm } from '@inertiajs/inertia-react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Header from '@/Components/Header';
import TextField from '@mui/material/TextField';

export default function BeforeAnswer({questionaires,passwords,auth,errors}){
    
    const [pass, setPass] = useState('');
    const enterPass = useCallback((e) => {
        setPass(e.target.value);
    });
    
    const checkPass = () => {
    }
    
    return(
        <>
            <Header>アンケート回答</Header>
            <h4 className="font-bold text-2xl mt-4">{questionaires.name}</h4>
            {questionaires.setting_id==1 ? (
                <>
                    <p>アンケートへの回答を始めますか？</p>
                    <Button color="warning" variant="contained" href={'/startanswer/'+questionaires.id}>始める</Button>
                </>
            ) : (
                <>
                   <p>このアンケートに回答するためにはパスワードの入力が必要です。</p>
                   <TextField variant="standard" onChange={() => enterPass()}/>
                   <Button color="warning" variant="contained" onClick={checkPass}>確認</Button>
                </>
            )}
        </>
        );
}