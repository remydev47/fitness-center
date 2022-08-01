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
    </Box>
  )
}

export default HeaderBanner