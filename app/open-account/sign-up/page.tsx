import { Box, Card, CardContent, Typography, TextField, Button } from '@mui/material';
import SignUpButtons from './SignUpButtons';

export default function SignUp() {


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
            Sign Up
          </Typography>
          <SignUpButtons />
        </CardContent>
      </Card>
    </Box>
  );
}
