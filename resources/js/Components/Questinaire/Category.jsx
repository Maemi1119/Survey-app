import React from 'react';
import Title from '@/Components/Title';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

export default function Category() {
    return(
        <div>
            <Title title='カテゴリー'/>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={category}
              label="Category"
              onChange={handleChange}
            >
                <MenuItem disabled value=''><em>選択しない</em></MenuItem>
                {categories.map(category=>{
                    return (
                    <MenuItem value={category}>{category}</MenuItem>
                    );
                })}
            </Select>
        </div>
        );
}