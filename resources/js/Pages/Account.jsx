import React, { useState,useEffect } from 'react';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm } from '@inertiajs/inertia-react';
import Title from '@/Components/Title';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import { LocalizationProvider, DatePicker } from '@mui/lab';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function Account({auth}) {
    
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        nickname: '',
        choice: [],
        limited: [],
        data:'',
        setting:'',
    });
    
    const sex = ['女','男','その他'];
    
    {/*カレンダー*/}
    const [value, setValue] = React.useState<Date | null>(null);
    const handleChange = (newValue = Date | null) => {
        setValue(newValue);
    };
    
    const jobs = ['学生','会社員・会社役員','公務員・団体職員','教員・学校職員','派遣社員・パート・アルバイト','専業主婦・主夫','その他'];
    
    const [pick, setPick] = React.useState('');
    const jobChange = (event) => {
        setPick(event.target.value);
    };
    
    const [show, setShow] = React.useState({
        password: '',
        showPassword: false,
    });
    
    const showChange = (password) => (event) => {
        setShow({ ...show, [password]: event.target.value });
        };
    
    const handleClickShowPassword = () => {
        setShow({
          ...show,
          showPassword: !show.showPassword,
        });
        };
    
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
        };
        
    return(
        <>
            <p>'こちらはアカウント作成フォームになります。'</p>
            <p>すでにアカウントをお持ちの方は<Button variant="text" href="">'ログイン'</Button>してください。</p>
            
            <div>
            <Title title='氏名' />
            <TextField placeholder={'鈴木　花子'} variant="standard"/>
            </div>
            
            <div>
            <Title title='ニックネーム' />
            <TextField placeholder={'ハナタロウ'} variant="standard"/>
            </div>
            
            <div>
                <Title title='メールアドレス' />
                <Box
                  component="form"
                  sx={{
                    '& .MuiTextField-root': { m: 1, width: '25ch' },
                  }}
                  noValidate
                  autoComplete="off"
                >
                    <div>
                    <TextField
                      error
                      variant="standard"
                    />
                    <TextField
                      error
                      label="確認"
                      helperText="Incorrect entry."
                      variant="standard"
                    />
                    </div>
                </Box>
            </div>
            
            <div>
                <Title title='電話番号' />
                <TextField inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }} />
            </div>
            
            <div>
                <Title title='性別' />
                <RadioGroup>
                {sex.map(setSex => {
                    return(
                        <FormControlLabel value={setSex} control={<Radio />} label={setSex}/>
                    );
                })}
                </RadioGroup>
            </div>
            
            <div>
                <Title title='生年月日' />
                <LocalizationProvider dateAdapter={AdapterDateFns} >
                  <Box sx={{ m: 2, width: '25ch' }}>
                    <DatePicker
                    label="Date"
                    value={value}
                    onChange={handleChange}
                    inputFormat='yyyy/MM/dd'
                    mask='____/__/__'
                    renderInput={(params) => <TextField {...params} />}
                    />
                  </Box>
                </LocalizationProvider>
            </div>
            
            <div>
                <Title title='職業' />
                <Box sx={{ minWidth: 120 }}>
                  <FormControl fullWidth>
                    <Select
                      value={pick}
                      onChange={jobChange}
                    >
                    <MenuItem disabled value=''><em>選択してください</em></MenuItem>
                    {jobs.map(job =>{
                        return(
                            <MenuItem value={job}>{job}</MenuItem>
                        );
                    })}
                    </Select>
                  </FormControl>
                </Box>
            </div>
            
            <div>
                <Title title='パスワード' />
                <FormControl sx={{ m: 1, width: '25ch' }} variant="standard">
                    <Box
                      component="form"
                      noValidate
                      autoComplete="off"
                    >
                        <Input
                            type={show.showPassword ? 'text' : 'password'}
                            value={show.password}
                            onChange={handleChange('password')}
                            endAdornment={
                            <InputAdornment position="end">
                            <IconButton
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            >
                            {show.showPassword ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                            </InputAdornment>
                            }
                        />
                        <Input
                            error
                            type={show.showPassword ? 'text' : 'password'}
                            label="確認"
                            helperText="Incorrect entry."
                            onChange={handleChange('password')}
                            endAdornment={
                            <InputAdornment position="end">
                            <IconButton
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            >
                            {show.showPassword ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                            </InputAdornment>
                            }
                        />
                    </Box>
                </FormControl>
            </div>
            
            <Button variant="contained" className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
    >'登録'</Button>
        </>
        );
}