import React, { useState, useEffect} from 'react'
import Pagination from '@mui/material/Pagination'
import { Typography, Box, Stack } from '@mui/material'
import { exerciseOptions, fetchData } from '../utils/fetchData'
import ExeciseCard from './ExeciseCard'


const Exercises = ({ exercises, setExercises, bodyPart }) => {
  console.log(exercises)
  return (
    <Box
     id="exercises"
     sx={{
      mt: { lg: '110px'}
    }}
    mt='50px'
    p="20px"
    >
      <Typography
       variant='h3'
       mb="46px"
      >
        Showing Results
      </Typography>
      <Stack 
        direction="row"
        sx={{
          gap: {lg: '110px', sm: '50px'}
        }}
        flexWrap="wrap"
        justifyContent="center"
      >
        {exercises.map((exercise, index) => (
          <ExeciseCard key={index} exercise={exercise} />
        ))}
      </Stack>
    </Box>
  )
}

export default Exercises