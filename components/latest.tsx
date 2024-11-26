import React from 'react'
import Headers from './headers'
import artist from '@/public/images/Rectangle 7.svg'
import Image from 'next/image'

const latest = [
    {
        image: artist,
        name: "XOLO",
        title: 'Lost'
    },
    {
        image: artist,
        name: "Rema",
        title: 'Calm down'
    }
]

export default function Latest() {
  return (
    <section className='px-banner-clamp py-20 bg-[#141414] text-white'>
        <div className='w-[60%]'>
            <Headers title='Latest Release' />
        </div>

        <div className='block max-sm:space-y-5 sm:flex justify-between mt-20'>
            {
                latest.map((datum, index) => 
                    <div key={index} className='rounded w-full sm:w-[47%] h-[300px] sm:h-[400px] relative overflow-hidden'>
                        <div className='absolute w-full h-full'>
                            <div className='relative w-full h-full'>
                                <Image 
                                    src={datum.image}
                                    fill
                                    alt={datum.name}
                                    className='object-cover'
                                />
                            </div>
                        </div>
                        <div className='absolute w-full h-full items-end flex p-5 justify-between'>
                            <span className='text-xl font-semibold'>{datum.title}</span>
                            <span className='bg-main px-10 rounded-tr-lg rounded-bl-lg py-2 shadow-lg shadow-gray-800'>{datum.name}</span>
                        </div>
                    </div>
                )
            }
        </div>
        <button className='border-2 border-white hover:bg-gradient-to-r from-[#286AFD] to-[#FF5453] px-10 py-2 mt-10 hover:border-none'>
                SIGN UP NOW
        </button>
    </section>
  )
}
