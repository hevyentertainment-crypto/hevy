import React from 'react'

export default function Loader() {
  return (
    <div className='w-screen h-screen bg-white flex items-center justify-center'>
        <img src='/images/rings.gif' alt='Loading...' className='w-[100px] h-[100px] object-cover' />
    </div>
  )
}
