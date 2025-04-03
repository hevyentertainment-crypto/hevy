import Image from 'next/image'
import React from 'react'
import { useRouter } from 'next/navigation'
import { ArtistDetailsType, useArtistContext } from './artistContext'

export default function Grid({data}: {data: ArtistDetailsType[]}) {
     const { artistDetails, setArtistDetails } = useArtistContext();
             const router = useRouter();
        
             const handleClick = (artist: ArtistDetailsType) => {
                setArtistDetails(artist)
                router.push('/artist_details')
            }
        
            console.log(artistDetails)
  return (
    <section className='w-full flex justify-between sm:gap-10 flex-wrap'>
        {
            data.map((datum: ArtistDetailsType, index: number) => 
                <div onClick={() => handleClick(datum)} key={index} className='w-[48%] cursor-pointer sm:w-[30%] gap-2 flex text-white mb-10 motion-preset-slide-right '>
                    <div className='w-[10%] text-[1rem] sm:text-[2rem] font-semibold'>{index <= 9 ? 0 : ''}{index + 1}</div>
                    <div className='w-[90%] sm:w-[85%]'>
                        <div className='relative w-full h-[180px] sm:h-[400px]'>
                            <Image 
                                src={`/images/${datum.pictures[0]}`}
                                fill
                                alt={datum.name}
                                className='object-cover'
                            />
                        </div>
                        <div className='text-[1rem] sm:text-[3rem] font-semibold leading-[2.5rem] sm:leading-[5rem]'>
                            {datum.name} 
                        </div>
                        <div className='flex max-sm:text-sm justify-between'>
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
