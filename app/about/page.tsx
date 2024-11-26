import Footer from '@/components/footer'
import Nav from '@/components/nav'
import Image from 'next/image'
import React from 'react'
import bg from '@/public/images/Rema-scaled.jpg'
import bg2 from '@/public/images/wizkid.webp'
import bg3 from '@/public/images/Rectangle 12.svg'
import bg4 from '@/public/images/328460423_154863884017384_5731560535556506618_n-768x960.jpg'
import bg5 from '@/public/images/BurnaBoy.jpg'
import we1 from '@/public/images/0bc412c5af40c081f283c80fc0048918.jpg'
import we2 from '@/public/images/a77387408f324aca89e9aa977daf7fad.jpg'
import we3 from '@/public/images/c9e9a72f4123a90d87360420c23f846b.jpg'
import Headers from '@/components/headers'

const services = [
    {
        image: we1,
        title: 'Artist Promotion',
        text: 'We boost artists visibility through strategic social media campaigns, press coverage, and influencer partnerships.'
    },
    {
        image: we2,
        title: 'Music Production & Distribution',
        text: ' From recording in top studios to releasing tracks on platforms like Spotify and Apple Music, we help artists produce and share their music globally.'
    },
    {
        image: we3,
        title: 'Branding & Marketing',
        text: 'Crafting a unique artist identity is essential. We work with artists to develop a strong brand that resonates with their audience.'
    }
]

export default function About() {
  return (
    <>
        <Nav />
        <section className=''>
            <div className='w-screen h-[60vh] relative '>
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

                <div className='absolute w-full h-full bg-black/80 flex items-center justify-center text-white'>
                    <Headers title='About us' />
                </div>
            </div>

            <div className='w-screen h-screen bg-[#141414] flex items-center p-banner-clamp justify-evenly'>
                <img 
                    src='/images/hevy MAIN WHITEE 2.svg'
                />
                <div className='w-[60%] text-white space-y-5'>
                    <h2 className='text-4xl font-semibold text-primary'>Our Story</h2>
                    <p>
                        Founded in 2024,Hevy was born from a deep passion for music and a commitment to elevate talented artists across the globe. What started as a small collective of music lovers and industry professionals has grown into a full-service artist promotion and management agency, dedicated to helping artists turn their dreams into reality.
                        <br />
                        <br />
                        Our team is made up of experienced professionals from various sectors of the music industry — from production and promotion to marketing and event management. We understand the challenges artists face in today&apos;s fast-paced, competitive environment, and we use our expertise to open doors, create opportunities, and build lasting success for our artists.
                    </p>
                </div>
            </div>

            <div className='w-screen h-screen bg-[#141414] p-banner-clamp flex justify-evenly items-center'>
                <div className='w-[60%] text-white space-y-5'>
                    <h2 className='text-4xl font-semibold text-primary'>Our Mission</h2>
                    <p>
                        Our Mission
                        At Hevy, our mission is simple: to empower music artists by providing them with the tools, resources, and connections they need to thrive. We believe that every artist deserves a platform to showcase their talent, and we&apos;re here to help them reach their full potential.
                        <br />
                        <br />
                        We work tirelessly to ensure that our artists&apos; music is heard by the right audiences, streamed across the world, and recognized by industry leaders. Our approach combines personalized strategy with a deep understanding of modern music trends to craft tailored solutions that meet each artist&apos;s unique needs.
                    </p>
                </div>

                <div className='flex w-[35%] gap-3 h-[90%]'>
                    <div className='h-full w-1/2 space-y-3'>
                        <div className='w-full h-[38%] relative'>
                            <Image 
                                src={bg2}
                                fill
                                alt='Image one'
                                className='object-cover'
                            />
                        </div>
                        <div className='w-full h-[38%] relative'>
                            <Image 
                                src={bg3}
                                fill
                                alt='Image one'
                                className='object-cover'
                            />
                        </div>
                    </div>
                    <div className='h-full w-1/2 space-y-3'>
                        <div className='w-full h-[50%] relative'>
                                <Image 
                                    src={bg4}
                                    fill
                                    alt='Image one'
                                    className='object-cover'
                                />
                            </div>
                            <div className='w-full h-[50%] relative'>
                                <Image 
                                    src={bg5}
                                    fill
                                    alt='Image one'
                                    className='object-cover'
                                />
                            </div>
                    </div>
                </div>
            </div>  

            <div className='w-screen h-screen bg-[#141414] p-banner-clamp flex justify-evenly items-center'>
                <div className='relative w-[400px] h-[500px]'>
                    <img 
                        src='/images/GcqpYTbXIAEb9bL.jpg'
                        className='w-[400px] h-[500px] rounded-lg absolute z-20 shadow-lg shadow-gray-800'
                    />
                    <div className='w-[400px] h-[500px] rounded-lg absolute z-10 border-2 border-primary translate-x-5 bottom-5 border-dashed'></div>
                </div>

                <div className='w-[60%] text-white space-y-5'>
                    <h2 className='text-4xl font-semibold text-primary'>Our Vision</h2>
                    <p>
                        Our vision is to become the go-to platform for discovering and nurturing tomorrow’s biggest music stars. We aspire to create a community where artists from all genres and backgrounds can grow, collaborate, and make a lasting impact on the global music scene.
                    </p>
                </div>

            </div>

            <div className='w-screen h-screen bg-[#141414] p-banner-clamp flex items-center gap-5 justify-center flex-col text-white'>
                <h2 className='text-xl font-semibold text-primary'>What we do</h2>
                <p className='w-1/2 text-center'>
                    We offer a wide range of services designed to promote and support music artists at every stage of their careers, including
                </p>
                <div className='w-full h-[80%] flex justify-evenly'>
                    {
                        services.map((service, index) => 
                            <div key={index} className='w-[25%]  space-y-3'>
                                <div className='w-full h-[65%] relative'>
                                    <Image 
                                        src={service.image}
                                        alt={service.title}
                                        fill
                                        className='object-cover'
                                    />
                                </div>
                                <h2 className='text-xl text-primary'>{service.title}</h2>
                                <p>{service.text}</p>
                            </div>
                        )
                    }
                </div>
            </div>

            <div className='w-screen h-screen bg-[#141414] p-banner-clamp flex flex-col items-center justify-center'>
                    <h2 className='text-xl font-semibold text-primary w-full'>Why chose us?</h2>
                    <div className='flex items-center gap-5 mt-3'>
                        <img src='/images/Rectangle 18.svg' />
                        <div className='text-white w-fit space-y-5'>
                            <p className='flex flex-col w-[80%]'>
                                <span className='text-primary'>Artist-Centric Approach: </span>
                                <span>We put artists first, ensuring they retain creative control while we handle the business side of things.
                                </span>
                            </p>
                            <p className='flex flex-col w-[80%]'>
                                <span className='text-primary'>Industry Connections: </span>
                                <span>Over the years, we&apos;ve built strong relationships with key players in the music industry, from record labels and producers to venues and media outlets.</span>
                            </p>
                            <p className='flex flex-col w-[80%]'>
                                <span className='text-primary'>Tailored Strategies:</span>
                                <span>Every artist is different, and so is their path to success. We create custom strategies to meet the unique goals and challenges of each artist we work with.
                                </span>
                            </p>
                        </div>
                    </div>
            </div>

            <div className='text-center flex flex-col items-center bg-[#141414] text-white pb-20 '>
                <span className='text-primary'>Ready to Work with Us?</span>
                <span className='w-1/2'> Are you an artist looking for promotion and management? Contact us today and let’s start building your future in music.</span>
            </div>
        </section>
        <Footer />
    </>
  )
}
