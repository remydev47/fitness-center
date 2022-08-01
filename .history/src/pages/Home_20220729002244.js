import React, { useState } from 'react';
import { Box } from '@mui/material'
import HeaderBanner from '../components/HeaderBanner';
import SearchExercises from '../components/SearchExercises';
import Exercises from '../components/Exercises';

const Home = () => {
  const [exercises, setExercises] = useState([]);
  const [bodyPart, setBodyPart ] = useState('all');

  return (
    <Box>
        <HeaderBanner />
        <SearchExercises 
          setExercises={setExercises}
          bodyPart={bodyPart}
          setBodyPart={setBodyPart}
        />
        <Exercises 
          setExercises={setExercises}
          bodyPart={bodyPart}
          setBodyPart={setBodyPart}
        />
    </Box>
  )
}

export default Home