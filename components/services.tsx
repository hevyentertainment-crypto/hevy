import React, { useState } from 'react'
import Headers from './headers'
import { FiArrowDownLeft } from "react-icons/fi";
import ComingSoon from './comingSoon';

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
  const [visible, setVisible] = useState(false)
  return (
    <section className='h-fit w-screen bg-[#141414] text-white px-banner-clamp py-16 sm:py-32'>
       {visible && <ComingSoon setVisible={() => setVisible(false)} />}
        <div className='w-[60%]'>
          <Headers title={'our services'} />
        </div>

        <div className='mt-5'>
            {
              services.map((service, index) => 
                <button onClick={() => setVisible(true)} key={index} className='flex items-center w-full justify-between text-gray-400 py-8 hover:text-gray-300 border-b-2 border-gray-600'>
                  <span className='text-[3rem] sm:text-[5rem] font-semibold'>{service.title}</span>
                  <span className='text-[5rem] sm:text-[8rem]'><FiArrowDownLeft /></span>
                </button>
              )
            }
        </div>
        
    </section>
  )
}
