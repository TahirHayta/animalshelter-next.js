import { Card, CardContent, CardActions, Typography, Button, Box } from '@mui/material';
import OpenAccountButton from './OpenAccountButtons';

const OpenAccount = () => {

  
    return (
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '100vh',
        }}
      >
        <Card sx={{ maxWidth: 400,minHeight: 200, padding: 3, boxShadow: 3 }}>
          <CardContent>
            <Typography variant="h5" component="div" textAlign="center" gutterBottom>
              Open Your Account
            </Typography>
          </CardContent>
          <OpenAccountButton/>
        </Card>
      </Box>
    );
  
}

export default OpenAccount
