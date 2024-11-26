import { Artists } from '@/app/artists/page'
import Image from 'next/image'
import React from 'react'

export default function List({data}: {data: Artists[]}) {
  return (
    <section className='w-full text-white'>
        {
            data.map((datum:Artists, index: number) => 
                <div key={index} className='py-5 flex items-center gap-5'>
                    <div className='text-5xl'>
                        {index <= 9 ? 0 : ''}{index +1} 
                    </div>
                    <div className='h-[200px] w-[20%] relative'>
                        <Image 
                            src={datum.image}
                            fill
                            alt={datum.name}
                            className='object-cover'
                        />
                    </div>
                    <div className='text-[5rem] font-semibold w-[30%] leading-[5rem]'>
                        {datum.name} 
                    </div>
                    <div className='w-[20%] text-xl'>
                        {datum.genre}
                    </div>
                    <div className='w-[20%] text-xl'>
                        {datum.year}
                    </div>
                </div>      
            )
        }
    </section>
  )
}
