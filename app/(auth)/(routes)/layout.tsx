import React from 'react'

export default function LayoutAuth({children}: {children: React.ReactNode}) {
  return (
    <div className='flex flex-col items-center justify-center h-full'>
        <p className='mt-2'>Dundev Dasrhboard</p>
        <h1 className='text-3xl my-2'>
            Welcome to my Dashboard
        </h1>
        <h2 className='text-2xl mb-3'>Dundev</h2>
      {children}
    </div>
  )
}

