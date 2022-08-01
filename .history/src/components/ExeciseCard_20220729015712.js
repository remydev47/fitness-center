import React from 'react'
import Link from 'react-router-dom'
import { Typography, Stack, Button } from '@mui/material'

const ExeciseCard = ({ exercise}) => {
  return (
    <Link
      className="exercise-card"
      to={`/exercises/${exercise.id}`}
    >
    </Link>
  )
}

export default ExeciseCard