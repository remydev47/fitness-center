import React, { useState, useEffect} from 'react'
import Pagination from '@mui/material/Pagination'
import { Typography, Box, Stack } from '@mui/material'
import { exerciseOptions, fetchData } from '../utils/fetchData'


const Exercises = ({ exercises, setExercises, bodyPart }) => {
  return (
    <Box
     id="exercises"
    sx={{
      mt: { lg: '110px'}
    }}
    mt='50px'
    p="20px"
    >
      <Typography>
        Showing Results
      </Typography>
    </Box>
  )
}

export default Exercises