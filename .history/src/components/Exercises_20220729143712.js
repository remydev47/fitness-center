import React, { useState, useEffect} from 'react'
import Pagination from '@mui/material/Pagination'
import { Typography, Box, Stack } from '@mui/material'
import { exerciseOptions, fetchData } from '../utils/fetchData'
import ExeciseCard from './ExeciseCard'


const Exercises = ({ exercises, setExercises, bodyPart }) => {
 const [currentPage, setCurrentPage] = useState(1)
 const exercisesPerPage = 9 ;

 const paginate = (e, value) => {
  setCurrentPage(value);

  window.scrollTo({ top: 1800, behaviour: 'smooth'})

 }

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
      <Stack mt="100px" alignItems="center">
        {exercises.length > 9 && (
          <Pagination
            color='standard'
            shape='rounded'
            defaultPage={1}
            count={Math.ceil(exercises.length / exercisesPerPage)} 
            page={currentPage}
            onChange={paginate}
            size='large'
          />
        )}
      </Stack>
    </Box>
  )
}

export default Exercises