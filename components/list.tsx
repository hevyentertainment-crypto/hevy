import { Artists } from '@/app/artists/page'
import Image from 'next/image'
import React from 'react'

export default function List({data}: {data: Artists[]}) {
  return (
    <section className='w-full text-white'>
        {
            data.map((datum:Artists, index: number) => 
                <div key={index} className='py-5 flex items-center gap-5 motion-preset-slide-right '>
                    <div className='text-xl sm:text-5xl'>
                        {index <= 9 ? 0 : ''}{index +1} 
                    </div>
                    <div className='h-[150px] sm:h-[200px] w-full sm:w-[20%] relative'>
                        <Image 
                            src={datum.image}
                            fill
                            alt={datum.name}
                            className='object-cover'
                        />
                    </div>
                    <div className='w-full sm:flex items-center'>
                        <div className='text-[1.5rem] sm:text-[5rem] font-semibold w-full leading-[2rem] sm:leading-[5rem]'>
                            {datum.name} 
                        </div>
                        <div className='w-[50%] sm:w-[15%] text-sm sm:text-xl'>
                            {datum.genre}
                        </div>
                        <div className='w-[50%] sm:w-[15%] text-sm sm:text-xl'>
                            {datum.year}
                        </div>
                    </div>
                </div>      
            )
        }
    </section>
  )
}
