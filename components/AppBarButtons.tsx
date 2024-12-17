'use client'
import { Box, Button, IconButton, Tooltip } from '@mui/material'
import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import PetsIcon from '@mui/icons-material/Pets';
import PersonIcon from '@mui/icons-material/Person';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import { useRouter } from 'next/navigation';

const AppBarButtons = () => {
    //TODO If logged in, these two must be change. you can add condition after using tRPC and routing.
    const [loggedIn, setLoggedIn] = React.useState(false)
    const [name,setName] = React.useState('')

    const {push} = useRouter() //TODO These will change as I will start using tRPC
    // If not logged in yet, login or signup page
    const openAccount = () => {
        push('/open-account') 
    }
    //to open profile page
    const openprofile =() => {
        push(`/profile/${name}`)//instead of single quotes, use ``
    }

    



    return (
        <Box>
            {/* different button picture will be used if logged in.*/}
            {loggedIn ? <Tooltip title="profile" arrow><IconButton color="inherit" aria-label="profile" onClick={openprofile}><PersonIcon /></IconButton></Tooltip>
            :<Tooltip title="open an account" arrow><IconButton color="inherit" aria-label="openAccount" onClick={openAccount}> <PermIdentityIcon /></IconButton></Tooltip>}

            <Tooltip title="home" arrow><IconButton color="inherit" aria-label="home"> <HomeIcon /></IconButton></Tooltip>
            <Tooltip title="animals" arrow><IconButton color="inherit" aria-label="animals"> <PetsIcon /></IconButton></Tooltip>
            <Tooltip title="about" arrow><IconButton color="inherit" aria-label="about"> <InfoIcon /></IconButton></Tooltip>
        </Box>
  )
}

export default AppBarButtons
