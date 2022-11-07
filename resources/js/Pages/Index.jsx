import React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Header from '@/Components/Header';
import Grid from '@mui/material/Grid';
import { Link } from '@inertiajs/inertia-react';

export default function Index(props){
    console.log(props);
    return(
        <>
            <Header>SurveyApp</Header>
            <div className="border-b-4 mt-6">
                <div className="text-center w-4/5 mx-auto">
                    <h4 className="font-bold text-2xl mt-4">アンケート作成</h4>
                    <p>下のボタンからアンケートを作成することができます。</p>
                    <Stack direction="row">
                        <img className="block mx-auto" width="300" height="240" src="assets/images/computer09_question.png" alt="アンケートツールの画像の説明" title="アンケートツールの画像"></img>
                        <img className="block mx-auto" width="300" height="240" src="assets/images/computer05_idea.png" alt="アンケートツールの画像の説明" title="アンケートツールの画像"></img>
                    </Stack>
                    <p className="mt-4">アンケートの作成方法はこちらをご参照ください</p>
                    <div className="text-center my-6">
                        <Button color="warning" variant="contained" href='/set'>アンケートを作る</Button>
                    </div>
                </div>
            </div>
            
            <Grid className="border-b-4 w-4/5 mx-auto" container>
                <Grid xs={6} item className="text-center">
                    <h4 className="font-bold text-2xl mt-4">アンケート結果の確認</h4>
                    <p>下のボタンからアンケート一覧を確認することができます。</p>
                    <img className="block mx-auto" width="300" height="240" src="assets/images/computer_laptop_angle1.png" alt="アンケートツールの画像の説明" title="アンケートツールの画像"></img>
                    <p className="mt-4">アンケート結果の確認方法はこちらをご参照ください。</p>
                    <div className="mt-6">
                        <Button color="warning" variant="contained" href='/list'>アンケートの表示</Button>
                    </div>
                </Grid>
                <Grid xs={6} item className="text-center">
                    <h4 className="font-bold text-2xl mt-4">アンケート結果の分析</h4>
                    <p>下のボタンからアンケートを作成することができます。</p>
                    <img className="block mx-auto" width="300" height="240" src="assets/images/computer_laptop_angle2.png" alt="アンケートツールの画像の説明" title="アンケートツールの画像"></img>
                    <p className="mt-4">結果分析機能は近々実装予定です。 </p>
                    <div className="my-6">
                        <Button color="warning" variant="contained" disabled>アンケートの分析</Button>
                    </div>
                </Grid>
            </Grid>
            
            <div className="border-b-4 mt-6">
                <div className="text-center w-4/5 mx-auto">
                    <h4 className="font-bold text-2xl mt-4">みんなのアンケート一覧</h4>
                    <p>下のボタンからみんなのアンケートを確認することができます。</p>
                    <Stack direction="row">
                        <img className="block mx-auto" width="300" height="240" src="assets/images/computer_income_man.png" alt="アンケートツールの画像の説明" title="アンケートツールの画像"></img>
                        <img className="block mx-auto" width="300" height="240" src="assets/images/computer_income_businesswoman.png" alt="アンケートツールの画像の説明" title="アンケートツールの画像"></img>
                    </Stack>
                    <p className="mt-4">アンケート一覧の使用方法はこちらをご参照ください</p>
                    <div className="text-center my-6">
                        <Button color="warning" variant="contained" href='/show'>一覧を表示する</Button>
                    </div>
                </div>
            </div>
            
            <Grid container className="mt-6">
                <Grid xs={2} item className="pl-10">
                    <Stack spacing={2}>
                        {props.auth.user ? (
                            <>
                                <Link href="#">アカウント情報</Link>
                                <Link href="#">アカウント管理</Link>
                                <Link href={route('logout')} method="post">ログアウト</Link>
                            </>
                        ) : (
                            <>
                                <Link href={route('login')}>ログイン</Link>
                                <Link href={route('register')}>アカウント作成</Link>
                            </>
                        )}
                    </Stack>
                </Grid>
                <Grid xs={2} item>
                    <Stack spacing={2}>
                        <Link href="#">アンケート作成ツール</Link>
                        <Link href="#">アンケート結果表示</Link>
                        <Link href="#">アンケート結果分析</Link>
                    </Stack>
                </Grid>
                <Grid xs={2} item className="pl-10">
                    <Stack spacing={2}>
                        {props.auth.user ? (
                            <>
                                <Link href="#">みんなのアンケート一覧</Link>
                                <Link href="#">カテゴリーの管理</Link>
                                <Link href="#">各機能のご利用方法</Link>
                            </>
                        ) : (
                            <>
                                <Link href="#">みんなのアンケート一覧</Link>
                                <Link href="#">各機能のご利用方法</Link>
                            </>
                        )}
                    </Stack>
                </Grid>
            </Grid>
        </>
    );
}