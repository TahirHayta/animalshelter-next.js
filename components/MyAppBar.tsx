
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import AppBarButtons from './AppBarButtons';

const MyAppBar = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: 'primary.main' }}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Adopt Animals
        </Typography>
        <AppBarButtons />
      </Toolbar>
    </AppBar>
  )
}

export default MyAppBar