"use client"
import Image from 'next/image'
import React from 'react'
import { Artist, Platforms } from '../form/page'
import { useGenerateLinkMutation } from '@/app/api/general';

import { ImSpinner2 } from 'react-icons/im';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/navigation';

export const platformIcons = {
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

export default function Preview({setPreview, artist, platforms, image, postalImage}: {setPreview: React.Dispatch<React.SetStateAction<boolean>>, artist: Artist, platforms: Platforms, image: null | string, postalImage: null | File }) {  
    const filteredPlatforms = Object.fromEntries(
        Object.entries(platforms).filter(([value]) => value !== '')
      );
    const platformsArray: [string, string][] = Object.entries(platforms);
    const [submitData, {isLoading}] = useGenerateLinkMutation();
    const router = useRouter();

    
   
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('name', artist.artistName);
        formData.append('title', artist.songTitle);
        formData.append('year', artist.yearOfRecording);
        if(postalImage){
            formData.append('posterImage', postalImage);
        }
        formData.append('links', JSON.stringify(filteredPlatforms));
        
        try{
            const res = await submitData(formData).unwrap();
            if(res){
                
                 toast.success('Link Generated', {
                                    position: "top-center",
                                    autoClose: 5000,
                                    hideProgressBar: false,
                                    closeOnClick: false,
                                    pauseOnHover: true,
                                    draggable: true,
                                    progress: undefined,
                                    theme: "dark",
                                });

                                setTimeout(() => {
                                    router.push('/link/history')
                                }
                                , 2000);
            }

        }catch(err){
             toast.error('Error Generating Link', {
                            position: "top-center",
                            autoClose: 5000,
                            hideProgressBar: false,
                            closeOnClick: false,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            theme: "dark",
                        });
            console.log(err)
        }   
    }

  return (
    <section className='w-screen h-screen absolute z-40'>
        <ToastContainer />
        <div className='w-screen h-screen relative'>
        <div className='w-screen h-screen absolute'>
                    <Image 
                        fill
                        src={image || '/images/BurnaBoy.jpg'}
                        alt='Aritist image'
                        className='object-cover'
                    />
                </div>

        <div className='w-screen h-screen backdrop-blur-xl flex sm:flex-row gap-5 flex-col justify-evenly sm:items-cenhter overflow-y-scroll px-10 sm:px-20 py-10 bg-black/50'>
            <div className='h-full flex justify-center gap- flex-col'>
                <button
                    onClick={setPreview.bind(null, false)}
                    className="text-white mb-4 flex items-center hover:text-gray-400 transition font-semibold text-md"
                >
                    ← Back
                </button>
                <h2 className='text-5xl sm:text-[8rem] text-white font-bold mb-5'>Preview</h2>
                <form method='POST' onSubmit={handleSubmit} >
                    <button disabled={isLoading} className='bg-main rounded text-white py-2 px-20 w-72 hover:bg-main/70 max-sm:w-full'>
                        { isLoading ? <ImSpinner2 className='animate-spin text-2xl mx-auto' />  :  'Generate Link'}
                    </button>
                </form>
            </div>

            <div className='w-full sm:w-[25%] h-fit'>
                           <div className='relative w-full h-[300px]'>
                               <Image 
                                   fill
                                   src={image || '/images/BurnaBoy.jpg'}
                                   alt='Aritist image'
                                   className='object-cover'
                               />
                           </div>
                           <div className='bg-gray-900 text-white px-2 py-3 text-sm space-y-1'>
                               <div className='flex justify-between'>
                                   <p>{artist.artistName} - {artist.songTitle}</p>
                                   <p className='text-xs'>{artist.yearOfRecording}</p>
                               </div>
                               <p className='text-[12px]'>Choose your preferred music service</p>
                           </div>      
                           <div className='bg-white'>
                                {
                                    platformsArray.map(([key,value]: [string, string], i: number) => {  
                                    return ( value !== '' &&
                                        <div key={i} className='flex justify-between p-3 hover:bg-gray-100'>
                                            <img 
                                                src={platformsArray && key  === 'spotify' ? platformIcons.spotify : key=== 'apple' ? platformIcons.apple : key=== 'youtube' ? platformIcons.youtube : key=== 'soundcloud' ? platformIcons.soundcloud : key=== 'deezer' ? platformIcons.deezer : key=== 'tidal' ? platformIcons.tidal : key=== 'amazon' ? platformIcons.amazon : key=== 'audiomack' ? platformIcons.audiomack : key=== 'bandcamp' ? platformIcons.bandcamp : key=== 'boomplay' ? platformIcons.boomplay : key=== 'Google Play' ? platformIcons.google : key=== 'itunes' ? platformIcons.itunes : platformIcons.shazam}
                                                width={100} height={40}
                                                className='object-contain'
                                            />
                                            <a href={value} target='_blank' className='text-[10px] px-3 py-2  bg-gray-300 rounded-xl'>
                                                PLAY
                                            </a>
                                        </div>
                                    )
                                }
                                )}
                           </div>
            </div>
        </div>
    </div>
    </section>
  )
}
