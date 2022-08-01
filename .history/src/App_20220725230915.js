import React from 'react'
import { Route, Routes } from 'react-router-dom';
import { Box } from '@mui/material'

import './App.css'
import Navbar from './components/Navbar';
import Home from './pages/Home';
import ExerciseDetail from './pages/Exercisedetail';

const App = () => {
  return (
    <Box>
      <Navbar />
      <Routes>
        <Route path="/"  element={<Home />}/>
        <Route path="/exercise/:id"  element={<ExerciseDetail />}/>
      </Routes>
    </Box>
  )
}

export default App