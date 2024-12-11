import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Box, Button } from '@mui/material';

const HeaderTopLeft = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: 'primary.main' }}>
      <Toolbar>

        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Adopt Animals
        </Typography>
        
        <Box sx={{ display: { display: 'block' } }}>
          <Button color="inherit">Home</Button>
          <Button color="inherit">About</Button>
          <Button color="inherit">Contact</Button>
        </Box>

      </Toolbar>
    </AppBar>
  )
}

export default HeaderTopLeft
