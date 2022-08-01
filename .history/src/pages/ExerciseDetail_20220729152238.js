import React, {useState, useEffect }from 'react'
import { useParams } from 'react-router-dom'
import { Box } from '@mui/material';

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