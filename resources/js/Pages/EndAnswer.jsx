import React from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

export default function EndAnswer(){
    
    return(
        <>
            <Typography variant="h2">アンケートの入力が完了しました！</Typography>
            <Button bariant='outlined' href='/'>ホームに戻る</Button>
        </>
        );
}