import React from 'react'
import {Typography, Stack, Button } from '@mui/material';

import BodyPartImage from '../assets/icons/body-part.png'
import Target from '../assets/icons/target.png';
import Equipment from '../assets/icons/equipment.png'

const Detail = ({ exerciseDetail }) => {
    const {bodyPart, gifUrl, name, target, equipment} = exerciseDetail

  return (
    <Stack
     gap="60px"
     sx={{
        flexDirection: {lg: 'row'},
        p: '20px',
        alignItems: 'center'
     }}
    >
        <img 
          src={gifUrl}
          alt={name}
          loading="lazy"
          className='detail-image'
        />
        <Stack
        sx={{
          gap: { lg: '35px', xs: '20px'}
        }}
        >
          <Typography
           variant="h3"
          >
            {name}
          </Typography>
          <Typography
            variant="h6"
          >
            Exercises keep you strong.
            {name}
            is the best 
            exercise to target your {target}. It will help you improve your mood
            and keep your back posture upright
          </Typography>
        </Stack>
    </Stack>
  )
}

export default Detail