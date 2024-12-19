
import { Box, Card, CardContent, Typography, TextField, Button } from '@mui/material';
import LogInButtons from './LogInButtons';

export default function LogIn() {


  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
      }}
    >
      <Card sx={{ maxWidth: 400, padding: 3, boxShadow: 3 }}>
        <CardContent>
          <Typography variant="h5" textAlign="center" gutterBottom>
            Log In
          </Typography>
          <LogInButtons />
        </CardContent>
      </Card>
    </Box>
  );
}
