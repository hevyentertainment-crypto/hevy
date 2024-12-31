"use client"
import React, { useState } from 'react'
import { LiaTimesSolid } from 'react-icons/lia'
import { MdCancel } from 'react-icons/md'

export default function ComingSoon({setVisible}: {setVisible: () => void}) {
    const [soon, setSoon] = useState(false)
  return (
    <section className='w-screen h-screen fixed px-5 backdrop-blur-3xl bg-white/10 z-50 flex items-center top-0 left-0 justify-center'>
        <div className='sm:w-1/3 w-full text-center relative bg-black text-white backdrop-blur-2xl p-5 rounded-3xl shadow-md shadow-black'>
            <button onClick={setVisible}  className='absolute right-5 -top-[30px] text-md cursor-pointer bg-black p-2 text-white rounded-2xl shadow-md shadow-gray-800 hover:bg-gray-900 transition ease-in-out'>
                <LiaTimesSolid className='text-3xl' />
            </button>
            <img 
                src='/images/hevy MAIN WHITEE 2.svg'
                className='mx-auto'
            />
            <h2 className='text-4xl font-bold'>
                Coming soon!
            </h2>
        </div>
    </section>
  )
}
