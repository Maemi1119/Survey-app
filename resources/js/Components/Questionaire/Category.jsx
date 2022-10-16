import React from 'react';
import Title from '@/Components/Title';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

export default function Category({postData,categories,data}) {
    return(
        <div>
            <Title title='カテゴリー'/>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={data.category_id}
              label="Category"
              onChange={postData}
            >
                <MenuItem disabled value=''><em>選択しない</em></MenuItem>
                {categories.map(category=>{
                    return (
                    <MenuItem value={category.id}>{category.name}</MenuItem>
                    );
                })}
            </Select>
        </div>
        );
}