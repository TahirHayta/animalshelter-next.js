import { AuthGuard } from '@/app/_MyPrivateFolders/AuthGuard'
import { Box } from '@mui/material'
import React from 'react'

const Profile = () => {
  return (
    <AuthGuard>
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <h1>Profile</h1>
      </Box>
    </AuthGuard>
  )
}

export default Profile
