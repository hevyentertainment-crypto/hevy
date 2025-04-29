"use client"
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { FaFacebook, FaInstagram, FaRegCopyright, FaRegEnvelope, FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import artists from '@/app/artists/allartists';
import { ArtistDetailsType, useArtistContext } from './artistContext';
import { useRouter } from 'next/navigation';


export default function Footer() {
  const year = new Date().getFullYear()
  const [allArtists, setartists] = useState<ArtistDetailsType[]>([])
const { setArtistDetails } = useArtistContext();

  useEffect(() => {
    if(artists){
      setartists(artists)
    }
  }, [artists])

  const handleClick = (artist: ArtistDetailsType) => {
          setArtistDetails(artist)
          router.push('/artist_details')
  }
     const router = useRouter();
  return (
    <section className='bg-[#141414] '>
        <div className='px-banner-clamp py-10 bg-[#1E1E1E] max-sm:space-y-10 sm:flex justify-between'>
            <div className='space-y-10'>
                <p className='text-secondary font-semibold text-xl'>WEBSITE</p>

                <p className='flex flex-col gap-10 text-white'>
                  <Link href={'/about'} className='hover:text-main'>About us</Link>
                  {/* <Link href={'/services'} className='hover:text-main'>Services</Link>
                  <Link href={'/contact'} className='hover:text-main'>Contact</Link> */}
                </p>
            </div>
            <div className='space-y-10'>
              <p className='text-secondary font-semibold text-xl'>ARTISTS</p>

              <p className='flex flex-col gap-10 text-white items-start'>
                {
                  allArtists && allArtists.map((artist: ArtistDetailsType, key: number) => <button  onClick={() => handleClick(artist)} key={key} className='hover:text-main'>{artist.name}</button>)
                }
                
              </p>
            </div>
            <div  className='space-y-10'>
              <p className='text-secondary font-semibold text-xl'>CONTACT US</p>

              <p className='flex flex-col gap-10 text-white'>
                <Link href={'mailto:hevyentertainment@gmail.com'} className='hover:text-main flex items-center gap-2'>
                    <span>
                      <FaRegEnvelope />
                    </span>
                    <span>
                      hevyentertainment@gmail.com
                    </span>
                  </Link>
                <Link href={'/services'} className='hover:text-main flex items-center gap-2'>
                  <span>
                    <FaWhatsapp />
                  </span>
                  <span>
                    +234 (0) 801 2345 678 
                  </span>
                </Link>
              </p>
            </div>
            <div className='space-y-10 text-white'>
                <p className='text-secondary font-semibold text-xl'>FOLLOW US</p>
                <div className='space-y-5'>
                    <p>Hevy Sounds</p>
                    <p className='flex gap-3 text-white text-4xl sm:text-2xl'>
                      <Link target='_blank' href={'https://www.instagram.com/hevy_sounds?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=='} className='hover:motion-preset-seesaw '><FaInstagram /></Link>
                      <Link target='_blank' href={'https://twitter.com/hevy_sounds'} className='hover:motion-preset-seesaw'><FaXTwitter /></Link>
                      <Link target='_blank' href={'https://m.facebook.com/public/hevysounds'} className='hover:motion-preset-seesaw'><FaFacebook /></Link>
                    </p>
                </div>
            </div>
        </div>

        <div className='sm:flex px-banner-clamp justify-evenly max-sm:space-y-10  py-10 text-gray-500'>
          <span className='text-[3rem] min-[300px]:text-[5rem] sm:text-[8rem] w-1/2 font-semibold leading-[3.5rem] min-[300px]:leading-[5rem] sm:leading-[10rem]'>
              HEVY SOUNDS
          </span>
          <img 
            src='/images/hevy MAIN WHITEE 2.svg'
          />
        </div>

        <p className='flex justify-center gap-3 items-center text-gray-200 py-5 text-xs min-[300px]:text-sm'>
          <FaRegCopyright /> { String(year) } Hevy Sounds. All rights reserved.
        </p>

    </section>
  )
}
