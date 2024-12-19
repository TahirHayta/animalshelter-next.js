"use client"
import { Box, Button, CardActions, TextField } from '@mui/material';
import React from 'react'

const LogInButtons = () => {
    const handleLogIn = () => {
      //TODO Implement sign-in logic here
      console.log('Sign In submitted');
    };
    return (
      <Box component="form" sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <TextField label="Email" type="email" fullWidth required />
      <TextField label="Password" type="password" fullWidth required />
      <Button
        variant="contained"
        color="primary"
        onClick={handleLogIn}
        sx={{ alignSelf: 'center', mt: 2 }}
      >
        Log In
      </Button>
    </Box>
    )
}

export default LogInButtons
