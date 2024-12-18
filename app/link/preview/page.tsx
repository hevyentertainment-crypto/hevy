"use client"
import Image from 'next/image'
import React from 'react'

export default function Preview() {
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

        <div className='w-screen h-screen backdrop-blur-xl flex sm:flex-row gap-5 flex-col justify-evenly overflow-y-scroll px-10 sm:px-20 py-10 bg-black/50'>
            <div className='h-full flex justify-center gap- flex-col'>
                <button
                    onClick={() => window.history.back()}
                    className="text-white mb-4 flex items-center hover:text-gray-400 transition font-semibold text-md"
                >
                    ← Back
                </button>
                <h2 className='text-5xl sm:text-[8rem] text-white font-bold mb-5'>Preview</h2>
                <button className='bg-main rounded text-white py-2 px-20 w-fit hover:bg-main/70 max-sm:w-full'>
                    Generate Link
                </button>
            </div>

            <div className='w-full sm:w-[20%] h-fit'>
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
