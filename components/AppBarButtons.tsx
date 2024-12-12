'use client'
import { Box, Button, IconButton } from '@mui/material'
import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import PetsIcon from '@mui/icons-material/Pets';
import PersonIcon from '@mui/icons-material/Person';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';

const AppBarButtons = () => {
    const [loggedIn, setLoggedIn] = React.useState(false)

    // If not logged in yet, login or signup page
    const openAccount = () => {
        setLoggedIn(true) //TODO
    }
    
    //to open profile page
    const openprofile =() => {
        setLoggedIn(false)//TODO
    }



    return (
        <Box>
            {/* different button picture will be used if logged in.*/}
            {loggedIn ? <IconButton color="inherit" aria-label="profile" onClick={openprofile}><PersonIcon /></IconButton>
            :<IconButton color="inherit" aria-label="openAccount" onClick={openAccount}> <PermIdentityIcon /></IconButton>}

            <IconButton color="inherit" aria-label="home"> <HomeIcon /></IconButton>
            <IconButton color="inherit" aria-label="animals"> <PetsIcon /></IconButton>
            <IconButton color="inherit" aria-label="about"> <InfoIcon /></IconButton>
        </Box>
  )
}

export default AppBarButtons
