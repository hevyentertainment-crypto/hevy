"use client"
import Footer from '@/components/footer'
import Nav from '@/components/nav'
import Image from 'next/image'
import React, { useState } from 'react'
import bg from '@/public/images/Rema-scaled.jpg'
import Headers from '@/components/headers'
import List from '@/components/list'
import Grid from '@/components/grid'
import { CgDisplayGrid } from 'react-icons/cg'
import { CiBoxList } from 'react-icons/ci'
import { artists } from '@/components/artists'




export default function Artists() {
    const [isList, setIsList] = useState(true);

    const handleList = () => {
        setIsList(true)
    }
    const handleGrid = () => {
        setIsList(false)
    }
  return (
    <>
        <Nav />
        <section>
            <div className='w-screen h-[50vh] sm:h-[60vh] relative'>
                <div className='absolute w-full h-full'>
                    <div className='w-full h-full relative'>
                        <Image 
                            src={bg}
                            alt='Background image'
                            fill
                            className='object-cover'
                        />
                    </div>
                </div>

                <div className='absolute w-full h-full bg-black/80 flex items-center justify-center text-white flex-col'>
                    <Headers title='ARTISTs' />
                    <div className='mt-5 flex flex-col items-center'>
                        {/* <span className='text-5xl'><MdOutlineDisplaySettings /></span> */}
                        <p className='flex gap-3 text-4xl font-semibold '>
                            <button onClick={handleList} className={`${isList ? 'text-main' : 'text-white'}`}><CiBoxList /></button>
                            <button onClick={handleGrid} className={`${!isList ? 'text-main' : 'text-white'}`}><CgDisplayGrid /></button>
                        </p>
                    </div>
                </div>
            </div>

            <div className='w-screen p-banner-clamp bg-[#141414]'>
                {
                    isList ? <List data={artists} /> : <Grid data={artists} />
                }
            </div>
        </section>
        <Footer />
    </>
  )
}
