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
        variant="h3"
        mb='33px'
      >
        Watch <span style={{ color: '#ff2625', textTransform: 'capitalize'}}>{name}</span> exercise Videos
      </Typography>
    </Box>
  )
}

export default ExerciseVideo