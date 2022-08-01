import React from 'react';
import { Stack, Typography } from '@mui/material';
import Icon from '../assets/icons/gym.png';

const Bodypart = () => {
  return (
    <Stack
     type="button"
     alignItems="center"
     justifyContent="center"
     className="bodyPart-card"
    >
        <img 
          src={Icon}
          alt="dumbell"
          styles={{
            width: '40px',
            height:'40px'
          }}
        />
    </Stack>
  )
}

export default Bodypart