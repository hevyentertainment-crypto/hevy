"use client"
import React, { useState } from 'react'
import Headers from './headers'
import artist_1 from '@/public/images/image_fx_ (36).jpg'
import artist_2 from '@/public/images/image_fx_ (37).jpg'
import artist_3 from '@/public/images/image_fx_ (65).jpg'
import artist_4 from '@/public/images/image_fx_ (41).jpg'

import Image from 'next/image'
import Link from 'next/link'
import ComingSoon from './comingSoon'
import { FaHeadphones } from 'react-icons/fa'

const artists = [
    {
        image: artist_1,
        name: 'Franword J'
    },
    {
        image: artist_2,
        name: 'Mikky Jon'
    },
    {
        image: artist_3,
        name: 'Mira Hany'
    },
    {
        image: artist_4,
        name: 'Rayboy'
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
        <div className='  max-[300px]:text-sm flex justify-between items-end'>
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
                    <button onClick={() => setVisible(true)} key={index} className='w-full h-[310px] relative sm:w-[23%] flex-shrink-0 max-sm:mb-3'>
                            <div className='absolute w-full h-full top-0'>
                                <div className='relative w-full h-full'> 
                                    <Image 
                                        src={artist.image}
                                        fill 
                                        alt={artist.name}
                                        className='object-cover'
                                    />
                                </div>
                            </div>
                            <div className='absolute flex justify-between items-center w-full px-4 bottom-0 bg-black/50'>
                                <h2 className='py-2 text-lg text-left'>{artist.name}</h2>
                                <span><FaHeadphones /></span>
                            </div>
                    </button> 
                )
            }
        </div>
        <div className='max-sm:mt-10'>
            <Link href={'/artists'} className='hover:text-main'>See more</Link>
        </div>
    </section>
  )
}
