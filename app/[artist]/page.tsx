"use client"
import Image from 'next/image'
import React, { useEffect } from 'react'
import { useRouter, useParams } from 'next/navigation'
import { useGetBrandQuery } from '../api/general'
import { ImSpinner2 } from 'react-icons/im'
import Link from 'next/link'

const platformIcons = {
    spotify: '/icons/music-service_spotify 1.svg',
    apple: '/icons/apple-music.svg',
    youtube: 'https://services.linkfire.com/logo_youtubemusic_onlight.svg',
    soundcloud: 'https://services.linkfire.com/logo_soundcloud_onlight.svg',
    deezer: '/icons/music-service_deezer 1.svg',
    tidal: '/icons/music-service_tidal 1.svg',
    amazon: '/icons/music-service_amazon 1.svg',
    audiomack: 'https://services.linkfire.com/logo_audiomack_onlight.svg',
    bandcamp: '/icons/music-service_bandcamp.svg',
    boomplay: '/icons/music-service_boomplay_updated 1.svg',
    google: '/icons/music-service_google.svg',
    itunes: '/icons/music-service_itunes 1.svg',
    shazam: '/icons/Shazam-Logo-SVG_006.png',
}

export default function ArtistLink() {
    const route = useRouter()

    const params = useParams()
    const id = params.artist
    const { data, isLoading } = useGetBrandQuery(id);
    const [platformsArray, setPlatformsArray] = React.useState<[string, string][]>([])
    console.log(data);

    useEffect(() => {
        if(data && data.links){
            setPlatformsArray(Object?.entries(data.links))
        }
    }, [data])

  return (
    <section className='w-screen h-screen relative'>
        <div className='w-screen h-screen absolute'>
            <Image 
                fill
                src={data ? data?.posterImage : '/images/GcqpYTbXIAEb9bL.jpg' }
                alt='Aritist image'
                className='object-cover'
            />
        </div>
        {
            isLoading && 
            <div className='w-screen h-screen absolute flex items-center z-50 text-4xl text-white justify-center backdrop-blur-xl'>
                 <ImSpinner2 className='animate-spin text-5xl mx-auto' />
            </div>
        }

       {data && 
            <div className='w-screen h-screen backdrop-blur-xl absolute flex flex-col items-center overflow-y-scroll pt-16 pb-10'>
                {/* <div className='py-10'></div> */}
                <div className='w-[90%] sm:w-[20%] h-fit'>
                    <div className='relative w-full h-[300px]'>
                        <Image 
                            fill
                            src={data?.posterImage}
                            alt='Aritist image'
                            className='object-cover'
                        />
                    </div>
                    <div className='bg-gray-900 text-white px-2 py-3 text-sm space-y-1'>
                        <div className='flex justify-between'>
                            <p>{data?.name} - {data.title}</p>
                            <p className='text-xs'>{data?.year}</p>
                        </div>
                        <p className='text-[12px]'>Choose your preferred music service</p>
                    </div>      
                    <div className='bg-white'>
                    {
                                    platformsArray && platformsArray.map(([key,value]: [string, string], i: number) => {  
                                    return ( value !== '' &&
                                        <Link href={value} target='_blank' key={i} className='flex justify-between p-3 hover:bg-gray-100 cursor-pointer'>
                                            <img 
                                                src={platformsArray && key  === 'spotify' ? platformIcons.spotify : key=== 'apple' ? platformIcons.apple : key=== 'youtube' ? platformIcons.youtube : key=== 'soundcloud' ? platformIcons.soundcloud : key=== 'deezer' ? platformIcons.deezer : key=== 'tidal' ? platformIcons.tidal : key=== 'amazon' ? platformIcons.amazon : key=== 'audiomack' ? platformIcons.audiomack : key=== 'bandcamp' ? platformIcons.bandcamp : key=== 'boomplay' ? platformIcons.boomplay : key=== 'Google Play' ? platformIcons.google : key=== 'itunes' ? platformIcons.itunes : platformIcons.shazam}
                                                width={100} height={40} className='object-contain'
                                            />
                                            <button className='text-[10px] h-fit px-3 py-2 bg-gray-300 rounded-xl'>
                                                PLAY
                                            </button>
                                        </Link>
                                    )
                                }
                                )}
                    </div>
                </div>
            </div>  
        }

        {
            !isLoading && !data && (
                <div className='w-screen h-screen absolute font-bold backdrop-blur-xl flex flex-col items-center z-50  justify-center text-white'>
                    <p className='text-center text-2xl'>Record not found</p>
                    <button onClick={() => route.push('/')} className='bg-main px-5 py-2 rounded text-white mt-5'>Home</button>
                </div>
            )
        }
    </section>
  )
}
