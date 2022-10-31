import React, { useEffect } from 'react';
import Checkbox from '@/Components/Checkbox';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Link, useForm } from '@inertiajs/inertia-react';
import Header from '@/Components/Header';
import Grid from '@mui/material/Grid';

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: '',
    });

    useEffect(() => {
        return () => {
            reset('password');
        };
    }, []);

    const onHandleChange = (event) => {
        setData(event.target.name, event.target.type === 'checkbox' ? event.target.checked : event.target.value);
    };

    const submit = (e) => {
        e.preventDefault();

        post(route('login'));
    };

    return (
        <>
            <Header>SurveyApp</Header>
            
            <h1 className="text-center text-2xl font-bold mt-4">
                <span className="italic">SurveyApp </span>へようこそ！
            </h1>
            
            <div className="w-4/5 mx-auto mt-16">
                <Grid container>
                    <Grid item xs={6}>
                        SurveyAppは様々な目的に対応するアンケートを作成し、自由度と利便性を重要視したアンケート作成アプリです。アンケートだけでなくテストを作成したり、アンケート結果の分析や作図などの機能も搭載しています。
                        <br/><br/>
                        サービスを利用するためにはログインが必要です。
                        初めてご利用される場合はアカウントをお作りいただくか、
                        既存のアカウントでログインしてください。
                        <br/><br/>
                        新しいアカウントを作成される方は
                        <Link className="text-blue-400" href={route('register')}>こちら</Link>
                        をご覧ください。
                     </Grid>
                     <Grid item xs={6}>
                        <form onSubmit={submit} className="w-3/5 mx-auto">
                            <div>
                                <InputLabel forInput="email" value="Email" />
                                <TextInput
                                    type="text"
                                    name="email"
                                    value={data.email}
                                    className="mt-1 block w-full"
                                    autoComplete="username"
                                    isFocused={true}
                                    handleChange={onHandleChange}
                                />

                                <InputError message={errors.email} className="mt-2" />
                            </div>

                            <div className="mt-4">
                                <InputLabel forInput="password" value="Password" />
            
                                <TextInput
                                    type="password"
                                    name="password"
                                    value={data.password}
                                    className="mt-1 block w-full"
                                    autoComplete="current-password"
                                    handleChange={onHandleChange}
                                />
            
                                <InputError message={errors.password} className="mt-2" />
                            </div>

                            <div className="block mt-4">
                                <label className="flex items-center">
                                    <Checkbox name="remember" value={data.remember} handleChange={onHandleChange} />
            
                                    <span className="ml-2 text-sm text-gray-600">Remember me</span>
                                </label>
                            </div>

                            <div className="flex items-center justify-end mt-4">
                                {canResetPassword && (
                                    <Link
                                        href={route('password.request')}
                                        className="underline text-sm text-gray-600 hover:text-gray-900"
                                    >
                                        パスワードを忘れた場合
                                    </Link>
                                )}
            
                                <PrimaryButton className="ml-4" processing={processing}>
                                    Log in
                                </PrimaryButton>
                            </div>
                        </form>
                     </Grid>
                </Grid>
            </div>
        </>
    );
}