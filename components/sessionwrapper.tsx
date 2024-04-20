"use client"
import { SessionProvider,  } from 'next-auth/react'
import React from 'react'

const Sessionwrapper: React.FC<{ children: React.ReactNode }>=({children}) => {
  return (
    <div>
      <SessionProvider>
        {children}
      </SessionProvider>
    </div>
  )
}
export default Sessionwrapper;