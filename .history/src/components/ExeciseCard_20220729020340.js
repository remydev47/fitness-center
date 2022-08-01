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
    </Link>
  )
}

export default ExeciseCard