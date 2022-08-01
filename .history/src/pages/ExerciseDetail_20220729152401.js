import React, {useState, useEffect }from 'react'
import { useParams } from 'react-router-dom'
import { Box } from '@mui/material';
import Detail from '../components/Detail';
import ExerciseVideo from '../components/ExerciseVideo';
import SimilarExercise from '../components/SimilarExercise';

import { fetchData, exerciseOptions } from '../utils/fetchData'

const ExerciseDetail = () => {
  return (
    <Box>
      <Detail />
      <ExerciseVideo />
      <SimilarExercise />
    </Box>
  )
}

export default ExerciseDetail