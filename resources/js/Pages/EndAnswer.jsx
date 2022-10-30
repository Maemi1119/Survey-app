import React, { useState,useEffect } from 'react';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm } from '@inertiajs/inertia-react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

export default function EndAnswer(){
    
    return(
        <>
            <Typography variant="h2">アンケートの入力が完了しました！</Typography>
            <Button bariant='outlined' href='/'>ホームに戻る</Button>
        </>
        );
}