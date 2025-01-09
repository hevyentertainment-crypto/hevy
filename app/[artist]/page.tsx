"use client"
import Image from 'next/image'
import React from 'react'

export default function ArtistLink() {
  return (
    <section className='w-screen h-screen relative'>
        <div className='w-screen h-screen absolute'>
            <Image 
                fill
                src={'/images/BurnaBoy.jpg'}
                alt='Aritist image'
                className='object-cover'
            />
        </div>
       
        <div className='w-screen h-screen backdrop-blur-xl absolute flex flex-col items-center overflow-y-scroll pt-16 pb-10'>
            {/* <div className='py-10'></div> */}
            <div className='w-[90%] sm:w-[20%] h-fit'>
                <div className='relative w-full h-[300px]'>
                    <Image 
                        fill
                        src={'/images/BurnaBoy.jpg'}
                        alt='Aritist image'
                        className='object-cover'
                    />
                </div>
                <div className='bg-gray-900 text-white px-2 py-3 text-sm space-y-1'>
                    <div className='flex justify-between'>
                        <p>XOLO - Like this</p>
                        <p className='text-xs'>2024</p>
                    </div>
                    <p className='text-[12px]'>Choose your preferred music service</p>
                </div>      
                <div className='bg-white'>
                    <div className='flex justify-between p-3'>
                        <img 
                            src='/icons/music-service_boomplay_updated 1.svg'
                        />
                        <button className='text-[10px] border-2 border-black/50 px-3 py-2'>
                            PLAY
                        </button>
                    </div>
                    <div className='flex justify-between p-3'>
                        <img 
                            src='/icons/music-service_boomplay_updated 1.svg'
                        />
                        <button className='text-[10px] border-2 border-black/50 px-3 py-2'>
                            PLAY
                        </button>
                    </div>
                    <div className='flex justify-between p-3'>
                        <img 
                            src='/icons/music-service_boomplay_updated 1.svg'
                        />
                        <button className='text-[10px] border-2 border-black/50 px-3 py-2'>
                            PLAY
                        </button>
                    </div>
                    <div className='flex justify-between p-3'>
                        <img 
                            src='/icons/music-service_boomplay_updated 1.svg'
                        />
                        <button className='text-[10px] border-2 border-black/50 px-3 py-2'>
                            PLAY
                        </button>
                    </div>
                    <div className='flex justify-between p-3'>
                        <img 
                            src='/icons/music-service_boomplay_updated 1.svg'
                        />
                        <button className='text-[10px] border-2 border-black/50 px-3 py-2'>
                            PLAY
                        </button>
                    </div>
                    <div className='flex justify-between p-3'>
                        <img 
                            src='/icons/music-service_boomplay_updated 1.svg'
                        />
                        <button className='text-[10px] border-2 border-black/50 px-3 py-2'>
                            PLAY
                        </button>
                    </div>
                    <div className='flex justify-between p-3'>
                        <img 
                            src='/icons/music-service_boomplay_updated 1.svg'
                        />
                        <button className='text-[10px] border-2 border-black/50 px-3 py-2'>
                            PLAY
                        </button>
                    </div>
                </div>
            </div>
        </div>  
    </section>
  )
}
