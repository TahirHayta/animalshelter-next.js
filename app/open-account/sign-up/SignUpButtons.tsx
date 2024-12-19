"use client"
import { Box, Button, CardActions, TextField } from '@mui/material';
import React from 'react'

const SignUpButtons = () => {
    const handleSignUp = () => {
    //TODO Implement sign-up logic here
      console.log('Sign Up submitted');
  };

    return (
          <Box component="form" sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <TextField label="Full Name" type="text" fullWidth required />
            <TextField label="Email" type="email" fullWidth required />
            <TextField label="Password" type="password" fullWidth required />
            <Button
              variant="contained"
              color="primary"
              onClick={handleSignUp}
              sx={{ alignSelf: 'center', mt: 2 }}
            >
              Sign Up
            </Button>
          </Box>
    )
}

export default SignUpButtons
