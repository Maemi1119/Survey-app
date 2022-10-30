import React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { Head, Link} from '@inertiajs/inertia-react';

export default function Index(){
    
    return(
        <>
            <div>
                <Typography variant="h4">アンケート作成</Typography>
                <p>下のボタンからアンケートを作成することができます。</p>
                <Stack>
                    <img src="assets/images/computer_laptop_angle1.png" alt="アンケートツールの画像の説明" title="アンケートツールの画像"></img>
                    <img src="assets/images/computer_laptop_angle2.png" alt="アンケートツールの画像の説明" title="アンケートツールの画像"></img>
                </Stack>
                <p>アンケートの作成方法は<Link href='/Instructions'>こちら</Link>をご参照ください</p>
                <Button variant="contained" href='/set'>アンケートを作る</Button>
            </div>
            
            <div>
                <Typography variant="h4">アンケート結果の確認</Typography>
                <p>下のボタンからアンケート一覧を確認することができます。</p>
                <img src="assets/images/computer_laptop_angle1.png" alt="アンケートツールの画像の説明" title="アンケートツールの画像"></img>
                <p>アンケート結果の確認方法は<Link href='/Instructions'>こちら</Link>をご参照ください。</p>
                <Button variant="contained" href='/list'>アンケートの表示</Button>
            </div>
            
            <div>
                <Typography variant="h4">アンケート結果の分析</Typography>
                <img src="assets/images/computer_laptop_angle2.png" alt="アンケートツールの画像の説明" title="アンケートツールの画像"></img>
                <p>結果分析機能は近々実装予定です。 </p>
                 <Button variant="contained" disabled>アンケートの分析</Button>
            </div>
        </>
        );
}