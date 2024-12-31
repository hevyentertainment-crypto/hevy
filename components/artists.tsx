"use client"
import React, { useState } from 'react'
import Headers from './headers'
import artist from '@/public/images/Rectangle 7.svg'
import Image from 'next/image'
import Link from 'next/link'
import ComingSoon from './comingSoon'

const artists = [
    {
        image: artist,
        name: 'Roaster Ban'
    },
    {
        image: artist,
        name: 'Mikky Jon'
    },
    {
        image: artist,
        name: 'Johnson Paul'
    },
    {
        image: artist,
        name: 'Ayra Star'
    },
    // {
    //     image: artist,
    //     name: 'Christain'
    // },
    // {
    //     image: artist,
    //     name: 'Rosalina'
    // },
]

export default function Artists() {
     const [visible, setVisible] = useState(false);
  return (
    <section className='w-screen py-20 sm:py-32 px-banner-clamp h-fit bg-[#141414] text-white sm:space-y-20 '>
         {visible && <ComingSoon setVisible={() => setVisible(false)} />}
        <div className=' flex justify-between items-end'>
            <span>More Info</span>
            <button onClick={() => setVisible(true)} className='border-2 border-white rounded px-5 py-2 hover:bg-main hover:rounded-full hover:text-white transition-all ease-in-out'>Join our Roaster</button>
        </div>
        <div className='sm:flex justify-between items-end max-sm:mt-20'>
            <Headers title='Artists' />
            <span>Our recent Artists</span>
        </div>
        <div className='w-full max-sm:gap-2 max-sm:overflow-x-scroll flex justify-between max-sm:mt-20'>
            {
                artists.map((artist, index) => 
                    <Link href={'/'} key={index} className='w-full sm:w-[23%] flex-shrink-0'>
                            <div className='relative w-full  h-[300px] '> 
                                <Image 
                                    src={artist.image}
                                    fill 
                                    alt={artist.name}
                                    className='object-cover'
                                />
                            </div>
                            <h2 className='py-2 text-xl'>{artist.name}</h2>
                    </Link> 
                )
            }
        </div>
        <div className='max-sm:mt-10'>
            <Link href={'/artists'} className='hover:text-main'>See more</Link>
        </div>
        
    </section>
  )
}
