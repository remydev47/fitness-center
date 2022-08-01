import React from 'react'
import {Box, Stack, Typography } from '@mui/material'

const ExerciseVideo = ({exerciseVideos, name}) => {
  return (
    <Box
      sx={{
        marginTop: {lg : '200px', xs: '20px'}
      }}
      p="20px"
    >
      <Typography
        variant="h4"
        mb='33px'
      >
        Watch {name} exercise Videos
      </Typography>
    </Box>
  )
}

export default ExerciseVideo