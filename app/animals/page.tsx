import { AuthGuard } from '@/app/_MyPrivateFolders/AuthGuard'
import React from 'react'

const Animals = () => {
  return (
    <AuthGuard>
      <div>
        
        <h1>Animals:</h1>
        
      </div>
    </AuthGuard>
  )
}

export default Animals
