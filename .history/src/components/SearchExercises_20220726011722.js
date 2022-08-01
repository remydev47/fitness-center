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
                },
                width: {
                    lg: '1170px',
                    xs: '350px'
                },
                backgroundColor: "#FFF",
                borderRadius: "40px"
             }}
              height="70px"
              value=""
              onChange={(e) => {}} 
              placeholder="Search Exercises"
              type="Text"
            />
            <Button 
             className="search-btn"
             sx={{
                bgcolor: "#FF2526",
                color: "#FFF",
                textTransform: 'none',
                width: {
                    lg : '175px',
                    xs: '80px'
                }
             }}
            >
                Search
            </Button>
        </Box>
    </Stack>
  )
}

export default SearchExercises