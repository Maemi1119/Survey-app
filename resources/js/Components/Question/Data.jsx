import React from 'react';
import Title from '@/Components/Title';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

export default function Data({id,number,handleChange}) {
    return(
        <div id="data{id}">
          <Title title='アップロードを許可するファイルの個数を選択してください。'/>
          <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={number}
          label="Number"
          onChange={handleChange}
        >
            {Array(10).fill(0).map((val, i) => {
                return(
                <MenuItem value={i+1}>{i+1}</MenuItem>
                )})
            }
          </Select>
        </div>
    );
}