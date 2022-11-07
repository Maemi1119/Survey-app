import React from 'react';
import Button from '@mui/material/Button';

export default function Share({questionaires,auth,errors}){
    
    return(
        <>
            <p>今回あなたが作成したアンケートのリンクはこちらです</p>
            <p>{'https://stark-crag-30845.herokuapp.com/answer/'+questionaires.id}</p>
            
            <Button href='/'>home</Button>
        </>
        );
}