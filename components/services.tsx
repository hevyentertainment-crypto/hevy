import React from 'react'
import Headers from './headers'
import Link from 'next/link'
import { FiArrowDownLeft } from "react-icons/fi";

const services = [
  {
    title: 'Promote',
    ref: '/promote'
  },
  {
    title: 'Production',
    ref: '/production'
  },
  {
    title: 'Recents',
    ref: '/recents'
  }
]

export default function Services() {
  return (
    <section className='h-fit w-screen bg-[#141414] text-white px-banner-clamp py-16 sm:py-32'>
        <div className='w-[60%]'>
          <Headers title={'our services'} />
        </div>

        <div className='mt-5'>
            {
              services.map((service, index) => 
                <Link key={index} href={service.ref} className='flex items-center justify-between text-gray-400 py-8 hover:text-gray-300 border-b-2 border-gray-600'>
                  <span className='text-[3rem] sm:text-[5rem] font-semibold'>{service.title}</span>
                  <span className='text-[5rem] sm:text-[8rem]'><FiArrowDownLeft /></span>
                </Link>
              )
            }
        </div>
        
    </section>
  )
}
