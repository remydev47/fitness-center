import React, { useState, useEffect } from 'react';
import { Box, Typography, Stack, Button, TextField } from '@mui/material';
import { FaSearch } from 'react-icons/fa'
import { exerciseOptions, fetchData } from '../utils/fetchData';

const SearchExercises = () => {

    const [search, setSearch]= useState('');
//     const [bodyParts, setBodyParts] = useState([]);

//    useEffect(() => {
//       const fetchExercisesData = async () => {
//       const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions);

//       setBodyParts(['all', ...bodyPartsData]);
//     };

//     fetchExercisesData();
//   }, []);

    const handleSearch = async () => {
        if(search) {
            const exercisesData = await fetchData
            ('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);
             
            console.log(exercisesData)
            // const searchedExercises = exercisesData.filter(
            //     (item) => item.name.toLowerCase().includes(search)
            //            || item.target.toLowerCase().includes(search)
            //            || item.equipment.toLowerCase().includes(search)
            //            || item.bodyPart.toLowerCase().includes(search),
            //   );  
            
            // window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });

            // setSearch('');
            // setExercises(searchedExercises);
        }
    }

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
                    lg: '800px',
                    xs: '350px'
                },
                backgroundColor: "#FFF",
                borderRadius: "40px"
             }}
              height="70px"
              value={search}
              onChange={(e) => setSearch(e.target.value.toLowerCase())}
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
                }, 
                fontSize: {
                    lg: '20px',
                    xs: '14px'
                },
                height: '76px',
                position: 'absolute',
                right: '0'
             }}
             onClick={handleSearch}
            >
                Search
            </Button>
        </Box>
    </Stack>
  )
}

export default SearchExercises