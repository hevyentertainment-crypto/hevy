"use client"
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import { LuCopy } from 'react-icons/lu'
import Image from 'next/image'
import { useGetUploadedSongsQuery } from '@/app/api/general'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { ImSpinner2 } from 'react-icons/im'
import moment from 'moment'



type Racord = {
    _id: string;
    name: string;
    title: string;
    year: string;
    posterImage: string;
    __v: number;
    linkId: string;
    createdAt: string;
    updatedAt: string;
    links: {
      itunes?: string;
    };
  };

export default function History() {
    const route = useRouter()
    const { data, isLoading } = useGetUploadedSongsQuery(null);
    const [searchQuery, setSearchQuery] = useState('');

    console.log(data)

    const handleCopy = (text: string) => {
        navigator.clipboard.writeText(text).then(() => {
            toast.success('Link Copied to clipboard', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
        }).catch(err => {
          console.error('Failed to copy: ', err);
        });
      };

      const filteredData = data?.filter((datum: Racord) =>
        datum.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        datum.name.toLowerCase().includes(searchQuery.toLowerCase())
      );

  return (
    <section className='w-screen h-fit min-h-screen'>
        <ToastContainer />

       <section className='w-screen  h-fit min-h-screen absolute'>
        <div className='relative w-screen h-fit min-h-screen'>
                <Image
                    alt="background Image"
                    src={'/images/image_fx_ (57).jpg'}
                    fill
                    className='object-cover'
                />
            </div>
       </section>
        <section className='py-10 px-5 sm:px-16 w-screen absolute z-50 bg-black/50 backdrop-blur-lg  h-fit min-h-screen max-sm:overflow-y-scroll'>
         <header className="flex sm:flex-row flex-col justify-between mb-8 sm:items-end">
            <h1 className="text-4xl sm:text-8xl font-extrabold text-white max-sm:mb-2">HEVY SOUNDS</h1>
            <div>
            <input
              type="text"
              placeholder='Search here...'
              className='w-full sm:w-[400px] border p-2 focus:outline-indigo-200'
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            </div>
        </header>
        {/* Back Button */}
        <button
            onClick={() => route.push('/link') }
            className="text-white mb-4 flex items-center hover:text-black transition font-semibold text-md"
        >
            ← Back
      </button>

     <div className='w-full max-sm:overflow-x-scroll'>
     <table className='w-full border-separate border-spacing-y-4 min-w-[600px]'>
            <thead>
                <tr className='font-semibold text-white'>
                    <td className='px-4'>Song title</td>
                    <td>Artist</td>
                    <td>Distribution Link</td>
                    <td>Date assigned</td>
                </tr>
            </thead>
            <tbody className='text-sm'>
                {
                    isLoading && (
                       <div className='py-10 w-full h-full'>
                         <ImSpinner2 className='animate-spin text-6xl  text-white' />
                       </div>
                    )
                }
                {
                    filteredData && filteredData.map((datum: Racord, index: number) =>
                        <tr key={index} className='bg-gray-100 p-2 hover:shadow-md shadow-gray-50 rounded-xl hover:bg-main hover:text-white'>
                            <td className='py-3 px-4  rounded-l-xl'>
                                {datum.title}
                            </td>
                            <td className='py-3 '>
                                {datum.name}
                            </td>
                            <td className='cursor-pointer flex  items-center gap-2 py-3 '>
                                <button onClick={() => handleCopy(`hevyhub.com/${datum.linkId}`)} >
                                    hevyhub.com/{datum.linkId}
                                </button>
                                <span  onClick={() => handleCopy('hevy.info/xolo-love')}>
                                    <LuCopy />
                                </span>
                            </td>
                            <td className='py-3   rounded-r-xl'>
                                { moment(datum.createdAt).format('ha : MMM D, YYYY') }
                            </td>
                        </tr>
                    )
                }
            </tbody>
            
      </table>
     </div>
        </section>
    </section>
  )
}
