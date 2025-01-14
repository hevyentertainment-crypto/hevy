import Footer from '@/components/footer'
import Nav from '@/components/nav'
import Image from 'next/image'
import React from 'react'
import bg from '@/public/images/Rema-scaled.jpg'
import image1 from '@/public/images/IMG_2999.png'
import image2 from '@/public/images/IMG_3001.png'
import image3 from '@/public/images/IMG_2998.png'
import Link from 'next/link'

const images = [
    {
        image: image1
    },
    {
        image: image3
    },
    {
        image: image2
    },
]

export default function ArtistDetails() {
  return (
    <>
        <Nav />
        <section>
            <div className='w-screen h-[70vh] relative'>
                    <div className='absolute w-full h-full'>
                        <div className='w-full h-full relative'>
                            <Image 
                                src={bg}
                                alt='Background image'
                                fill
                                className='object-cover'
                            />
                        </div>
                    </div>

                    <div className='absolute w-full h-full bg-black/80 flex md:flex-row flex-col items-center justify-center md:justify-between max-md:space-y-3 text-white px-banner-clamp '>
                        <h1 className="text-[5rem] font-semibold leading-[5rem] w-full md:w-1/3">
                        Jvstdede
                        </h1>
                        <p className='text-gray-300 max-md:w-full'>
                            Afro-pop
                        </p>
                        <h3 className='text-[4rem] max-md:w-full'>
                            01
                        </h3>
                    </div>
            </div>

            <div className='w-screen p-banner-clamp flex max-md:flex-wrap bg-[#141414] justify-center gap-5'>
                {
                    images.map((image, index) =>
                        <div key={index} className='w-[48%] md:w-[22%] h-[200px] md:h-[400px] relative mb-3'>
                            <Image 
                                src={image.image}
                                fill
                                alt='Artist Image'
                                className='object-cover'
                            />  
                        </div>
                    )
                }
            </div>

            <div className='bg-[#141414] px-banner-clamp py-5 text-white space-y-4'>
                <h2 className='text-xl  text-primary'>Biography</h2>
                <div className='flex md:flex-row flex-col justify-between'>
                    <p className='w-full md:w-[45%]'>
                        Bella great is an Afrobeat artist known for her unique musical style, notable achievements and  key characteristics. Born and raised in Ijebu-ode, she began their journey into music at 20, inspired by her musical influences, personal experiences. With a passion for Afrobeat genre, star has quickly made a name for themselves with alot of mentions on a standout performance, release, or recognition.
                    </p>
                    <p className='w-full md:w-[45%]'>
                        Her debut project, &apos;LOVINDAR&apos;, released in 2024, was a chart-topping, Busting success and a critically acclaimed record. Since then, Bella Great has continued to evolve, blending Afrobeat to create a sound that&apos;s brands her uniqueness. Her work often explores themes of  love, identity, societal issues, making it relatable to fans across the globe.

                    </p>
                </div>
            </div>

            <div className='bg-[#141414] px-banner-clamp flex items-center justify-center gap-10 py-5 w-screen'>
                <Link target='_blank' href={'https://open.spotify.com/track/2OrI6bYoBWHi2e27EvAa6d?si=PbFa2G2rSW2svPSa7wo2Aw&context=spotify%3Aalbum%3A3Oh6irkHpgqtRGtVqALUiA'} className='w-[20%] md:w-[10%] transition-transform transform hover:scale-105 duration-300'>
                    <img 
                        src='/images/sportify.svg'
                        className='w-full'
                    />
                </Link>
                <Link target='_blank' href={'https://music.apple.com/ng/album/damn/1783234137?i=1783234138'} className='w-[20%] md:w-[10%] transition-transform transform hover:scale-105 duration-300'>
                    <img 
                        src='/images/applesvg.svg'
                        className='w-full'
                    />
                </Link>
                <Link href={'#'} className='w-[20%] md:w-[10%] transition-transform transform hover:scale-105 duration-300'>
                    <img 
                        src='/images/logos_youtube.svg'
                        className='w-full'
                    />
                </Link>
            </div>  
        </section>
        <Footer />
    </>
  )
}
