import React, { useState } from 'react';
import { Box } from '@mui/material'

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