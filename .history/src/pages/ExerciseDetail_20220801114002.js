import React, {useState, useEffect }from 'react'
import { useParams } from 'react-router-dom'
import { Box } from '@mui/material';
import Detail from '../components/Detail';
import ExerciseVideo from '../components/ExerciseVideo';
import SimilarExercise from '../components/SimilarExercise';

import { fetchData, exerciseOptions, youtubeOptions } from '../utils/fetchData'

const ExerciseDetail = () => {
   const [exerciseDetail, setExerciseDetail] = useState({});
   const [exerciseVideos, setExerciseVideos] = useState([])

   const { id } = useParams()

   useEffect(() => {
    const fetchExercisesData =  async () => {
    const exerciseDbUrl = 'https://exercisedb.p.rapidapi.com';
    const youtubeSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com'

    const exerciseDetailData = await fetchData(`${exerciseDbUrl}/exercises/exercise/${id}`, exerciseOptions)
    setExerciseDetail(exerciseDetailData)


    const exerciseVideosData = await fetchData(`${youtubeSearchUrl}/search?q=${exerciseDetailData.name}`, youtubeOptions)
    setExerciseVideos(exerciseVideosData)
    }

    fetchExercisesData(); 
   }, [id])

  return (
    <Box>
      <Detail exerciseDetail={exerciseDetail} />
      <ExerciseVideo exerciseVideos={exerciseVideos} name={exerciseDetail.name}/>
      <SimilarExercise />
    </Box>
  )
}

export default ExerciseDetail