import Image from 'next/image'
import React from 'react'

export default function Grid({data}: any) {
  return (
    <section className='w-full flex justify-between gap-10 flex-wrap'>
        {
            data.map((datum: any, index: number) => 
                <div key={index} className='w-[30%] gap-2 flex text-white'>
                    <div className='w-[10%] text-[2rem] font-semibold'>{index <= 9 ? 0 : ''}{index + 1}</div>
                    <div className='w-[85%]'>
                        <div className='relative w-full h-[400px]'>
                            <Image 
                                src={datum.image}
                                fill
                                alt={datum.name}
                                className='object-cover'
                            />
                        </div>
                        <div className='text-[3rem] font-semibold leading-[5rem]'>
                            {datum.name} 
                        </div>
                        <div className='flex justify-between'>
                            <span className='text-md'>{datum.genre}</span>
                            <span className='text-md'>{datum.year}</span>
                        </div>
                    </div>
                </div>
            )
        }
    </section>
  )
}
