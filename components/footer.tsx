import Link from 'next/link'
import React from 'react'
import { FaFacebook, FaInstagram, FaRegCopyright, FaRegEnvelope, FaWhatsapp, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <section className='bg-[#141414] '>
        <div className='px-banner-clamp py-10 bg-[#1E1E1E] max-sm:space-y-10 sm:flex justify-between'>
            <div className='space-y-10'>
                <p className='text-secondary font-semibold text-xl'>WEBSITE</p>

                <p className='flex flex-col gap-10 text-white'>
                  <Link href={'/about'} className='hover:text-main'>About us</Link>
                  <Link href={'/services'} className='hover:text-main'>Services</Link>
                  <Link href={'/contact'} className='hover:text-main'>Contact</Link>
                </p>
            </div>
            <div className='space-y-10'>
              <p className='text-secondary font-semibold text-xl'>ARTISTS</p>

              <p className='flex flex-col gap-10 text-white'>
                <Link href={'/about'} className='hover:text-main'>Rema</Link>
                <Link href={'/services'} className='hover:text-main'>Crayon</Link>
                <Link href={'/contact'} className='hover:text-main'>Victony</Link>
                <Link href={'/contact'} className='hover:text-main'>Fave</Link>
                <Link href={'/contact'} className='hover:text-main'>Davido</Link>
                <Link href={'/contact'} className='hover:text-main'>Burna boy</Link>
                <Link href={'/contact'} className='hover:text-main'>Wizkid</Link>
                <Link href={'/contact'} className='hover:text-main'>Runtown</Link>
              </p>
            </div>
            <div  className='space-y-10'>
              <p className='text-secondary font-semibold text-xl'>CONTACT US</p>

              <p className='flex flex-col gap-10 text-white'>
                <Link href={'/about'} className='hover:text-main flex items-center gap-2'>
                    <span>
                      <FaRegEnvelope />
                    </span>
                    <span>
                      hevysound@gmail.com
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
                      <Link href={'/'} className='hover:motion-preset-seesaw '><FaInstagram /></Link>
                      <Link href={'/'} className='hover:motion-preset-seesaw'><FaXTwitter /></Link>
                      <Link href={'/'} className='hover:motion-preset-seesaw'><FaFacebook /></Link>
                      <Link href={'/'} className='hover:motion-preset-seesaw'><FaYoutube /></Link>
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
