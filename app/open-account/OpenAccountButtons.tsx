"use client"
import { Button, CardActions } from '@mui/material';
import { useRouter } from 'next/navigation';
import React from 'react'

const OpenAccountButtons = () => {
    const router = useRouter();

    const handleLogIn = () => {
      router.push('/open-account/log-in');
    };

    const handleSignUp = () => {
      router.push('/open-account/sign-up'); 
    };
    return (
        <CardActions sx={{ justifyContent: 'center', gap: 2 }}>
            <Button variant="contained" color="primary" onClick={handleLogIn} size='large'>
              Log In
            </Button>
            <Button variant="outlined" color="primary" onClick={handleSignUp}size='large'>
              Sign Up
            </Button>
          </CardActions>
    )
}

export default OpenAccountButtons
