import React from 'react'
import { Link } from 'react-router-dom'
import { Typography, Stack, Button } from '@mui/material'

const ExeciseCard = ({ exercise }) => {
  return (
    <Link
      className="exercise-card"
      to={`/exercise/${exercise.id}`}
    >
        <img 
          src={exercise.gifUrl}
          alt={exercise.name}
          loading="lazy"
        />
        <Stack
          direction="row"
        >
            <Button
              sx={{
                ml: '10px',
                color: '#fff',
                background: '#ffa9a9',
                fontSize: '14px',
                borderRadius: '20px',
                textTransform: 'capitalize'
              }}
            >
                {exercise.bodyPart}
            </Button>
            <Button
              sx={{
                ml: '10px',
                color: '#fff',
                background: '#fcc757',
                fontSize: '14px',
                borderRadius: '20px',
                textTransform: 'capitalize'
              }}
            >
                {exercise.targetMuscle}
            </Button>
        </Stack>  
        <Typography
         ml="21px"
         color="#000"
         fontWeight="bold"
         mt="11px"
         pt="10px"
         textTransform="capitalize"
        >
            {exercise.name}
        </Typography>  
    </Link>
  )
}

export default ExeciseCard