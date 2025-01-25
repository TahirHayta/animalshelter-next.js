import MyAppBar from '@/components/MyAppBar'
import { Box } from '@mui/material'
import React from 'react'
import figmaButton from '@/fromFigma/Button.svg'
import Image from 'next/image'
import CardsSection from '@/fromFigma/CardsSection.svg'

const Home = () => {
  return (
  <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100vh'}}>
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <h1 style={{ fontSize: '5rem' }}>Home</h1>
      <div>
        <Image src={figmaButton} alt="figmaButton" />
      </div>
    </Box>
    <div>
      <Image src={CardsSection} alt="CardsSection" />
    </div> 
  </Box>
  )
}

export default Home
