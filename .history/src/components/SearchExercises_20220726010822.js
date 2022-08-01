import React, { useState, useEffect } from 'react';
import { Box, Typography, Stack, Button, TextField } from '@mui/material'

const SearchExercises = () => {
  return (
    <Stack
      alignItems="center"
      mt="30px"
      justifyContent="center"
      p="20px"
    >
        <Typography
         fontWeight={700}
         sx={{
            fontSize:{ lg: '44px', xs: '30px'}
         }}
         mb="50px"
         textAlign="center"
        >
            Awesome Exercises You <br />
            Should Know
        </Typography>
        <Box
          position="relative"
          mb="72px"

        >
            <TextField
             sx={{
                input: {
                    fontweight: '700',
                    border: 'none',
                    borderRadius: '4px'
                }
             }}
              height="70px"
              value=""
              onChange={(e) => {}} 
              placeholder="Search Exercises"
              type="Text"
            />
        </Box>
    </Stack>
  )
}

export default SearchExercises