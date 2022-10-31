import React, { useState,useEffect } from 'react';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm } from '@inertiajs/inertia-react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

export default function Share({questionaires,auth,errors}){
    
    return(
        <>
            <p>今回あなたが作成したアンケートのリンクはこちらです</p>
            <p>{'https://stark-crag-30845.herokuapp.com/answer/'+questionaires.id}</p>
            
            <Button href='/'>home</Button>
        </>
        );
}