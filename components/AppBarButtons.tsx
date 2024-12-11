'use client'
import { Box, Button, IconButton } from '@mui/material'
import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import PetsIcon from '@mui/icons-material/Pets';

const AppBarButtons = () => {
  return (
    <Box>
        <IconButton color="inherit" aria-label="home"> 
            <HomeIcon />
        </IconButton>
        <IconButton color="inherit" aria-label="about"> 
            <InfoIcon />
        </IconButton>
        <IconButton color="inherit" aria-label="animals"> 
            <PetsIcon />
        </IconButton>
    </Box>
  )
}

export default AppBarButtons
