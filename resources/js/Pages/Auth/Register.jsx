import React, { useEffect } from 'react';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Link, useForm } from '@inertiajs/inertia-react';
import Header from '@/Components/Header';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import TextField from '@mui/material/TextField';
import dayjs from 'dayjs';

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        nickname: '',
        email: '',
        phone: '',
        sex: '',
        birthday: dayjs('2014-08-18T21:11:54'),
        job: '',
        password: '',
        password_confirmation: '',
    });

    useEffect(() => {
        return () => {
            reset('password', 'password_confirmation');
        };
    }, []);

    const onHandleChange = (event) => {
        setData(event.target.name, event.target.type === 'checkbox' ? event.target.checked : event.target.value);
    };
    
    const handleSex = (type) => {
        setData('sex', type);
    };
    
    const handleBirth = (e) => {
        setData('birthday', e.target.value);
    };

    const submit = (e) => {
        e.preventDefault();

        post(route('register'));
    };

    return (
        <>
            <Header>アカウント作成</Header>
            
            <form onSubmit={submit} className="w-2/5 mt-4 ml-12">
                <div className="mt-2">
                    <InputLabel forInput="name" value="氏名" />

                    <TextInput
                        type="text"
                        name="name"
                        value={data.name}
                        className="mt-1 block w-full"
                        autoComplete="name"
                        isFocused={true}
                        handleChange={onHandleChange}
                        required
                    />

                    <InputError message={errors.name} className="mt-2" />
                </div>
                
                <div className="mt-6">
                    <InputLabel forInput="nickname" value="ニックネーム" />

                    <TextInput
                        type="text"
                        name="nickname"
                        value={data.nickname}
                        className="mt-1 block w-full"
                        autoComplete="nickname"
                        isFocused={true}
                        handleChange={onHandleChange}
                        required
                    />

                    <InputError message={errors.nickname} className="mt-2" />
                </div>

                <div className="mt-6">
                    <InputLabel forInput="email" value="メールアドレス" />

                    <TextInput
                        type="email"
                        name="email"
                        value={data.email}
                        className="mt-1 block w-full"
                        autoComplete="username"
                        handleChange={onHandleChange}
                        required
                    />

                    <InputError message={errors.email} className="mt-2" />
                </div>
                
                <div className="mt-6">
                    <InputLabel forInput="phone" value="電話番号" />

                    <TextInput
                        type="text"
                        name="phone"
                        value={data.phone}
                        className="mt-1 block w-full"
                        autoComplete="username"
                        handleChange={onHandleChange}
                        required
                    />

                    <InputError message={errors.phone} className="mt-2" />
                </div>
                
                <div className="mt-6">
                    <InputLabel forInput="phone" value="性別" />

                    <Stack direction="row" spacing={2}>
                        <Button variant={data.sex == "男" ? "contained" : "outlined"} onClick={() => handleSex("男")}>男</Button>
                        <Button variant={data.sex == "女" ? "contained" : "outlined"} onClick={() => handleSex("女")}>女</Button>
                        <Button variant={data.sex == "その他" ? "contained" : "outlined"} onClick={() => handleSex("その他")}>その他</Button>
                    </Stack>
                    <InputError message={errors.sex} className="mt-2" />
                </div>
                
                <div className="mt-6">
                    <InputLabel forInput="birthday" value="生年月日" />
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DesktopDatePicker
                          label="Date desktop"
                          inputFormat="YYYY/MM/DD"
                          value={data.birthday}
                          onChange={handleBirth}
                          renderInput={(params) => <TextField {...params} />}
                        />
                    </LocalizationProvider>
                </div>
                
                <div className="mt-6">
                    <InputLabel forInput="job" value="職業" />

                    <TextInput
                        type="text"
                        name="job"
                        value={data.job}
                        className="mt-1 block w-full"
                        autoComplete="username"
                        handleChange={onHandleChange}
                        required
                    />

                    <InputError message={errors.job} className="mt-2" />
                </div>

                <div className="mt-6">
                    <InputLabel forInput="password" value="Password" />

                    <TextInput
                        type="password"
                        name="password"
                        value={data.password}
                        className="mt-1 block w-full"
                        autoComplete="new-password"
                        handleChange={onHandleChange}
                        required
                    />

                    <InputError message={errors.password} className="mt-2" />
                </div>

                <div className="mt-6">
                    <InputLabel forInput="password_confirmation" value="Confirm Password" />

                    <TextInput
                        type="password"
                        name="password_confirmation"
                        value={data.password_confirmation}
                        className="mt-1 block w-full"
                        handleChange={onHandleChange}
                        required
                    />

                    <InputError message={errors.password_confirmation} className="mt-2" />
                </div>

                <div className="flex items-center mt-10">
                    <Link href={route('login')} className="underline text-sm text-gray-600 hover:text-gray-900">
                        既にアカウントをお持ちの方
                    </Link>

                    <PrimaryButton className="ml-4" processing={processing}>
                        登録
                    </PrimaryButton>
                </div>
            </form>
        </>
    );
}