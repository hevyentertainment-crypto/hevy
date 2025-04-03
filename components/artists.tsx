"use client"
import React, { useState } from 'react'
import Headers from './headers'
import { useRouter } from 'next/navigation'

import { ArtistDetailsType, useArtistContext } from './artistContext'

import Image from 'next/image'
import Link from 'next/link'
import ComingSoon from './comingSoon'
import { FaHeadphones } from 'react-icons/fa'

export const artists: ArtistDetailsType[] = [
    {
        image:  'Daniel Blizz image 2.png',
        name: 'Daniel Blizz',
        pictures: [
            'Daniel Blizz image 2.png',
            'Daniel blizz image 1.jpg',
            'Daniel blizz image 3.png'
        ],
        biography: "Daniel Blizz, is a rising star in the Afrosoul scene, blending heartfelt lyrics with soulful rhythms to create music that resonates deeply with his audience. With a style that bridges tradition and innovation, Daniel's artistry is a refreshing addition to the genre. Whether through stirring melodies or thought-provoking storytelling, he invites listeners on a journey of connection and emotion. Keep an eye on this promising talent as he continues to carve out his space in the music industry.",
        genre: 'Afro Soul',
        year: '2025',
        rank: "01"
    },
    {
        image: 'IMG_3001.png',
        name: 'Jvstdede',
        pictures: [
            'IMG_3001.png',
            'IMG_2999.png',
            'IMG_3001.png'
        ],
        biography: '',
        genre: 'Afro-Pop',
        year: '2024',
        rank: "02"
    },
    {
        image: 'Great image 1.jpg',
        name: 'Great',
        pictures: [
            'Great image 1.jpg',
            'Great image 2.jpg'
        ],
        biography: "GREAT is more than just an artist—he is a movement. With his unique sound, Afro-Revolution, he fuses deep African-themed lyricism with hip-hop soul, creating music that awakens, empowers, and inspires. Born in Nigeria and shaped by experiences across Moscow and the UK, GREAT's journey has transformed his artistry. Now, under Hevy's management, GREAT is set to amplify his message, using music as a force for consciousness and change. He is revolutionizing Afro hip-hop from the diaspora, blending cultural depth with modern sound to create a movement that resonates across generations.",
        genre:'Afro Revolution',
        year: '2025',
        rank: '03'
    },
]

export default function Artists() {
     const [visible, setVisible] = useState(false);
     const { artistDetails, setArtistDetails } = useArtistContext();
     const router = useRouter();

     const handleClick = (artist: ArtistDetailsType) => {
        setArtistDetails(artist)
        router.push('/artist_details')
    }

    console.log(artistDetails)
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
                    <button onClick={() => handleClick(artist)} key={index} className='w-full h-[310px] sm:h-[380px] relative sm:w-[32%] flex-shrink-0 max-sm:mb-3'>
                            <div className='absolute w-full h-full top-0'>
                                <div className='relative w-full h-full'> 
                                    <Image 
                                        src={`/images/${artist.image}`}
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
