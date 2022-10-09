import React, {useState} from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Slider from '@mui/material/Slider';
import MuiInput from '@mui/material/Input';

export default function Sliders({min,max}) {
    
    const [value, setValue] = React.useState((min+max)/2);

    const handleSliderChange = (event, newValue) => {
    setValue(newValue);
    };
    
    const handleInputChange = (event) => {
    setValue(event.target.value === '' ? '' : Number(event.target.value));
    };
    
    const handleBlur = () => {
    if (value < 0) {
      setValue(0);
    } else if (value > 10000) {
      setValue(10000);
    }
    };
    
    return(
        <Grid container spacing={2} alignItems="center">
            <Grid item xs>
              <Slider
                value={typeof value === 'number' ? value : 0}
                onChange={handleSliderChange}
                aria-labelledby="input-slider"
              />
            </Grid>
            <Grid item>
              <Input
                value={value}
                size="small"
                onChange={handleInputChange}
                onBlur={handleBlur}
                inputProps={{
                  step: 1,
                  min: {min},
                  max: {max},
                  type: 'number',
                  'aria-labelledby': 'input-slider',
                }}
              />
            </Grid>
         </Grid>
    );
};