"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import { FaTimes } from 'react-icons/fa';
import { HiOutlineMenuAlt4 } from 'react-icons/hi';
  
const navs = [
    {
        title: 'Home',
        ref: '/'
    },
    {
        title: 'Artists',
        ref: '/artists'
    },
    {
        title: 'About us',
        ref: '/about'
    }
]
export default function Nav() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileNav, setMobileNav] = useState(false)
    const pathName = usePathname()

    useEffect(() => {
        const handleScroll = () => {
          setIsScrolled(window.scrollY > 50);
        };
    
        window.addEventListener('scroll', handleScroll);
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    


  return (
    <>
    {
        mobileNav &&
        <div className='fixed w-screen h-screen bg-[#141414] z-30 py-36 text-2xl text-white px-banner-clamp flex flex-col motion-preset-slide-right '>
        {
            navs.map((nav, index) => 
                <Link href={nav.ref} key={index} className={`py-5 px-5  ${pathName === nav.ref && 'bg-secondary rounded-l-full motion-preset-fade '}`}>
                    {nav.title}
                </Link>
            )
        }

        <Link href={'/contact'} className={`py-5 px-5  ${pathName === '/contact' && 'bg-secondary rounded-l-full motion-preset-fade '}`}>
            Contact
        </Link>
    </div>
    }
        <section className={`${isScrolled ? ' backdrop-blur-xl text-white shadow-sm ' : 'bg-transparent'} text-white py-5 px-banner-clamp flex justify-between items-center fixed w-full z-40 `}>
        
        <div className='text-4xl flex-col flex '>
            <span className='font-bold text-main'>Hevy</span>
            <span>Sounds</span>
        </div>
        <div className='text-sm space-x-5 relative sm:flex items-center hidden '>
            {
                navs.map((nav, index) => <Link key={index} href={nav.ref} className={`${pathName === nav.ref ? "navLink" : ""}`}>{nav.title.toUpperCase()}</Link>)
            }
        </div>
        <button className={`${isScrolled ? ' bg-main  text-white' :' bg-main text-white '} rounded px-5 py-2 hidden sm:block`}>
            Contact us
        </button>

        <button onClick={() => setMobileNav(!mobileNav)} className='text-5xl block sm:hidden'>
            { mobileNav ? <FaTimes /> : <HiOutlineMenuAlt4 /> }
        </button>
    </section>
    </>
  )
}
