import { AuthGuard } from '@/app/_MyPrivateFolders/AuthGuard'
import React from 'react'

const About = () => {
  return (
    <AuthGuard>
      <div>
        
        <h1>About:</h1>
        
      </div>
    </AuthGuard>
  )
}

export default About
