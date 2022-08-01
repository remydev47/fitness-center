import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import banner from '../assets/images/banner.png';

const HeaderBanner = () => {
  return (
    <Box
      sx={{
        mt:{ lg: '212px', xs: '70px'},
        ml: { sm: '50px'}
      }} 
      position="relative"
      p="20px"
    >
        <Typography
          color="#FF2625" 
          fontSize="26px"
          fontWeight="600"       
        >
            Fitness Club
        </Typography>
        <Typography
          fontWeight={700}
          sx={{  
             fontSize: { lg:'44px', xs: '40px'}
          }}
        >
            Eat, Sweat <br/>and Repeat
        </Typography>
        <Typography>
            Check-out the Best Exercises
        </Typography>
    </Box>
  )
}

export default HeaderBanner