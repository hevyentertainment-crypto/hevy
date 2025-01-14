import React from 'react'

export default function DanceIcons({icon}: {icon: string}) {
  return (
    <section className='border-white backdrop-blur-4xl bg-white/20 w-20 h-20 flex items-center justify-center shadow-lg shadow-white '>
        <img 
            src={icon}
        />
    </section>
  )
}
