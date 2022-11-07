import React, { useCallback } from 'react';
import { useForm } from '@inertiajs/inertia-react';
import Button from '@mui/material/Button';
import Header from '@/Components/Header';
import TextField from '@mui/material/TextField';

export default function BeforeList({questionaires,auth,errors}){
    const { data, setData, post } = useForm({
        password: '',
    });
    
    const enterPass = useCallback((e) => {
        setData('password', e.target.value);
    });
    
    const submit = () =>{
        post('/checklook/'+questionaires.id);
    };

    return(
        <>
            <Header>アンケート結果確認</Header>
            <h4 className="font-bold text-2xl mt-4">{questionaires.name}</h4>
                <p>このアンケートの結果を閲覧するにはパスワードの入力が必要です。</p>
                <TextField variant="standard" onChange={(e) => enterPass(e)}/>
                <p color='red'>{errors.missing}</p>
                <Button color="warning" variant="contained" onClick={submit}>確認</Button>
        </>
        );
}