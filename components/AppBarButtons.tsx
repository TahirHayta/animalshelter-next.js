'use client'
import { Box, Button } from '@mui/material'
import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import PetsIcon from '@mui/icons-material/Pets';

const AppBarButtons = () => {
  return (
    <Box>
          <Button color="inherit" startIcon={<HomeIcon />}></Button>
          <Button color="inherit" startIcon={<InfoIcon />}></Button>
          <Button color="inherit" startIcon={<PetsIcon />}></Button>
    </Box>
  )
}

export default AppBarButtons
