import React from 'react'
import {Box, Stack, Typography } from '@mui/material'

const ExerciseVideo = ({ exerciseVideos, name }) => {
  //if (!exerciseVideos.length) return 
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
      <Stack
        justifyContent="flex-start"
        flexWrap="wrap"
        alignItems="center"
        sx={{
          flexDirection: { lg: 'row'},
          gap: {lg :'110px', xs: '0'}
        }}
      >
        {exerciseVideos?.slice(0, 3)?.map((item, index) => (
          <a
            key={index}
            className="exercise-video"
            href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
            target="_blank"
            rel="noreferrer"
          >
            <img style={{ borderTopLeftRadius: '20px' }} src={item.video.thumbnails[0].url} alt={item.video.title} />
            <Box>
              <Typography sx={{ fontSize: { lg: '28px', xs: '18px' } }} fontWeight={600} color="#000">
                {item.video.title}
              </Typography>
              <Typography fontSize="14px" color="#000">
                {item.video.channelName}
              </Typography>
            </Box>
          </a>
        ))}
      </Stack>
    </Box>
  )
}

export default ExerciseVideo