"use client"
import React from 'react'
import Headers from './headers'
import artist from '@/public/images/Rectangle 7.svg'
import Image from 'next/image'
import Link from 'next/link'

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
    {
        image: artist,
        name: 'Christain'
    },
    {
        image: artist,
        name: 'Rosalina'
    },
]

export default function Artists() {
  return (
    <section className='w-screen py-32 px-banner-clamp h-fit bg-[#141414] text-white space-y-20'>
        <div className=' flex justify-between items-end'>
            <span>More Info</span>
            <button className='border-2 border-white rounded px-5 py-2 hover:bg-main hover:rounded-full hover:text-white transition-all ease-in-out'>Join our Roaster</button>
        </div>
        <div className='sm:flex justify-between items-end'>
            <Headers title='Artists' />
            <span>Our recent Artists</span>
        </div>
        <div className='w-full flex overflow-x-scroll gap-5'>
            {
                artists.map((artist, index) => 
                    <div key={index} className='w-full sm:w-[25%] flex-shrink-0'>
                            <div className='relative w-full  h-[300px] '> 
                                <Image 
                                    src={artist.image}
                                    fill 
                                    alt={artist.name}
                                    className='object-cover'
                                />
                            </div>
                            <h2 className='py-2 text-xl'>{artist.name}</h2>
                    </div> 
                )
            }
        </div>
        <div>
            <Link href={'/'} className='hover:text-main'>See more</Link>
        </div>
        
    </section>
  )
}
