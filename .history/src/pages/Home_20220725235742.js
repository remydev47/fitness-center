import React, { useState } from 'react';
import { Box } from '@mui/material'
import HeaderBanner from '../components/HeaderBanner';
import SearchExercises from '../components/SearchExercises';
import Exercises from '../components/Exercises';

const Home = () => {
  return (
    <Box>
        <HeaderBanner />
        <SearchExercises />
        <Exercises />
    </Box>
  )
}

export default Home