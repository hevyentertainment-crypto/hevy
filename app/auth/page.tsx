"use client"
import React from 'react'
import "swiper/css/navigation";
import 'swiper/css/effect-fade';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';
import 'swiper/css';
import 'swiper/css/effect-cards';
import swiper_1 from "@/public/images/Rema-scaled.jpg"
import swiper_2 from "@/public/images/a77387408f324aca89e9aa977daf7fad.jpg"
import swiper_3 from "@/public/images/c9e9a72f4123a90d87360420c23f846b.jpg"
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectFade, Autoplay } from 'swiper/modules'
import Image, { StaticImageData } from 'next/image';
import Headers from '@/components/headers';
import { useLoginMutation } from '../api/general';
import { ImSpinner2 } from 'react-icons/im';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Cookies from 'js-cookie';


export default function Auth() {
    const [submitData, { isLoading }] = useLoginMutation();
    const [formDetails, setFormDetails] = React.useState({
        email: '',
        password: ''
    });


    const effectImages = [
        swiper_2,
        swiper_1,
        swiper_3
    ]

    const handleChange = (e : React.ChangeEvent<HTMLInputElement>) => {
        setFormDetails({
            ...formDetails,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e : React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try{
            const res = await submitData(formDetails).unwrap();
            if(res){
                toast.success('Login Successfull', {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                });

                Cookies.set('token', JSON.stringify(res.accessToken), { expires: 1 });

                setTimeout(() => {
                    window.location.href = '/link'
                }, 2000);
            }
        }catch(e){
            console.log(e)
            toast.error('Login Failed', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
        }
    }

  return (
    <section className='w-screen h-screen overflow-x-hidden'>
        <ToastContainer />
         <div className='absolute w-full h-full overflow-x-hidden'>
            <Swiper
                      spaceBetween={30}
                      modules={[EffectFade, Autoplay]} 
                      slidesPerView={1}
                      effect={"fade"}
                      speed={1500}
                      autoplay= {{
                          delay: 10000,
                          disableOnInteraction: false,
                      }}
                      className='absolute overflow-hidden z-10 max-lg:h-full max-lg:min-w-[1200px] max-lg:hidden lg:h-full lg:min-w-[1300px] lg:w-screen lg:overflow-hidden'
                      >
                      {effectImages.map((el : StaticImageData, i : number) => {
                          return <SwiperSlide key={i} className="lg:w-screen lg:overflow-x-hidden w-screen overflow-hidden"><Image
                           src={el} fill alt={`Slide ${i} `}  className="object-cover" /></SwiperSlide>;
                      })}
              </Swiper>
        </div>

        <div className='w-screen h-screen bg-black/80 absolute z-50 flex items-center px-5 sm:px-20 overflow-hidden '>

            <div>
                <div className='w-full sm:w-1/3 max-lg:hidden text-white'>
                        <Headers title='Hevy Sounds' />
                        <p className='mt-3 text-secondary font-semibold'>Link Generator</p>
                </div>
            </div>

            <div className='w-full lg:w-[40%] p-5 sm:p-16 max-sm:text-white sm:bg-white rounded'>
                
            <h2 className='font-semibold sm:hidden'>
                HEVY SOUNDS
            </h2>
                <h2 className='text-2xl font-semibold'>Sign in</h2>
               <form method='POST' onSubmit={handleSubmit} >
                <div className='flex flex-col mt-5 text-black'>
                        <label htmlFor="email" className='text-white'>Email</label>
                        <input value={formDetails.email} onChange={handleChange} name='email' type="text" className='p-2 rounded border-2 focus:outline-indigo-200' />
                    </div>
                    <div className='flex flex-col mt-5'>
                        <label htmlFor="email" className='text-white'>Password</label>
                        <input value={formDetails.password} type="password" onChange={handleChange} name='password' className='p-2 rounded border-2 focus:outline-indigo-200 text-black' />
                    </div>

                    <button disabled={isLoading}  className='bg-main rounded text-center text-white py-2 w-full mt-10 sm:mt-10 hover:bg-main/70'>
                        { isLoading ? <ImSpinner2 className='animate-spin text-2xl mx-auto' /> : "Sign in" }
                    </button>
               </form>

               <button className='text-xs text-main font-semibold'>
               Forgot Password?
               </button>
            </div>
        </div>
    </section>
  )
}
