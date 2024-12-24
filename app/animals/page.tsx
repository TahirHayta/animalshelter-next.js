import { AuthGuard } from '@/app/_MyPrivateFolders/AuthGuard'
import React from 'react'

const Animals = () => {
  return (
    <AuthGuard>
      {/* TODO I can use <Suspense> here. */}
      <div>
        
        <h1>Animals:</h1>
        
      </div>
    </AuthGuard>
  )
}

export default Animals
