import React, { useState,useEffect } from 'react';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm } from '@inertiajs/inertia-react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

export default function Share({questionaires,auth,errors}){
    
    return(
        <>
            <Typography variant="h4">{questionaires.name}</Typography>
        </>
        );
}