"use client"
import React from 'react'
import { useRouter } from 'next/navigation'
import { LuCopy } from 'react-icons/lu'

export default function History() {
    const route = useRouter()
  return (
    <section className='py-10 px-5 sm:px-16 w-screen'>
         <header className="flex sm:flex-row flex-col justify-between mb-8 sm:items-end">
            <h1 className="text-4xl sm:text-8xl font-extrabold text-blue-600 max-sm:mb-2">HEVY SOUNDS</h1>
            <div>
                <input type="text" placeholder='Search here...' className='w-full sm:w-[400px] border p-2 focus:outline-indigo-200' />
                <button className='px-10 py-2 max-sm:mt-2 bg-blue-600 text-white'>
                    Search
                </button>
            </div>
        </header>
        {/* Back Button */}
        <button
            onClick={() => route.push('/link') }
            className="text-blue-600 mb-4 flex items-center hover:text-black transition font-semibold text-md"
        >
            ← Back
      </button>

     <div className='w-full max-sm:overflow-x-scroll'>
     <table className='w-full border-separate border-spacing-y-4 min-w-[600px]'>
            <thead>
                <tr className='font-semibold'>
                    <td className='px-4'>Song title</td>
                    <td>Artist</td>
                    <td>Distribution Link</td>
                    <td>Date assigned</td>
                </tr>
            </thead>
            <tbody className='text-sm'>
                <tr className='bg-gray-100 p-2 hover:shadow-md shadow-gray-50 rounded-xl hover:bg-main hover:text-white'>
                    <td className='py-3 px-4  rounded-l-xl'>
                        Like this
                    </td>
                    <td className='py-3 '>
                        XOLO
                    </td>
                    <td className='cursor-pointer flex  items-center gap-2 py-3 '>
                        <span>
                            hevy.info/xolo-love
                        </span>
                        <span>
                            <LuCopy />
                        </span>
                    </td>
                    <td className='py-3   rounded-r-xl'>
                        12pm, May 2
                    </td>
                </tr>

                <tr className='bg-gray-100 p-2 hover:shadow-md shadow-gray-50 rounded-xl hover:bg-main hover:text-white'>
                    <td className='py-3 px-4  rounded-l-xl'>
                        Like this
                    </td>
                    <td className='py-3 '>
                        XOLO
                    </td>
                    <td className='cursor-pointer flex  items-center gap-2 py-3 '>
                        <span>
                            hevy.info/xolo-love
                        </span>
                        <span>
                            <LuCopy />
                        </span>
                    </td>
                    <td className='py-3   rounded-r-xl'>
                        12pm, May 2
                    </td>
                </tr>

                <tr className='bg-gray-100 p-2 hover:shadow-md shadow-gray-50 rounded-xl hover:bg-main hover:text-white'>
                    <td className='py-3 px-4  rounded-l-xl'>
                        Like this
                    </td>
                    <td className='py-3 '>
                        XOLO
                    </td>
                    <td className='cursor-pointer flex  items-center gap-2 py-3 '>
                        <span>
                            hevy.info/xolo-love
                        </span>
                        <span>
                            <LuCopy />
                        </span>
                    </td>
                    <td className='py-3   rounded-r-xl'>
                        12pm, May 2
                    </td>
                </tr>

                <tr className='bg-gray-100 p-2 hover:shadow-md shadow-gray-50 rounded-xl hover:bg-main hover:text-white'>
                    <td className='py-3 px-4  rounded-l-xl'>
                        Like this
                    </td>
                    <td className='py-3 '>
                        XOLO
                    </td>
                    <td className='cursor-pointer flex  items-center gap-2 py-3 '>
                        <span>
                            hevy.info/xolo-love
                        </span>
                        <span>
                            <LuCopy />
                        </span>
                    </td>
                    <td className='py-3   rounded-r-xl'>
                        12pm, May 2
                    </td>
                </tr>

                <tr className='bg-gray-100 p-2 hover:shadow-md shadow-gray-50 rounded-xl hover:bg-main hover:text-white'>
                    <td className='py-3 px-4  rounded-l-xl'>
                        Like this
                    </td>
                    <td className='py-3 '>
                        XOLO
                    </td>
                    <td className='cursor-pointer flex  items-center gap-2 py-3 '>
                        <span>
                            hevy.info/xolo-love
                        </span>
                        <span>
                            <LuCopy />
                        </span>
                    </td>
                    <td className='py-3   rounded-r-xl'>
                        12pm, May 2
                    </td>
                </tr>

                <tr className='bg-gray-100 p-2 hover:shadow-md shadow-gray-50 rounded-xl hover:bg-main hover:text-white'>
                    <td className='py-3 px-4  rounded-l-xl'>
                        Like this
                    </td>
                    <td className='py-3 '>
                        XOLO
                    </td>
                    <td className='cursor-pointer flex  items-center gap-2 py-3 '>
                        <span>
                            hevy.info/xolo-love
                        </span>
                        <span>
                            <LuCopy />
                        </span>
                    </td>
                    <td className='py-3   rounded-r-xl'>
                        12pm, May 2
                    </td>
                </tr>

                <tr className='bg-gray-100 p-2 hover:shadow-md shadow-gray-50 rounded-xl hover:bg-main hover:text-white'>
                    <td className='py-3 px-4  rounded-l-xl'>
                        Like this
                    </td>
                    <td className='py-3 '>
                        XOLO
                    </td>
                    <td className='cursor-pointer flex  items-center gap-2 py-3 '>
                        <span>
                            hevy.info/xolo-love
                        </span>
                        <span>
                            <LuCopy />
                        </span>
                    </td>
                    <td className='py-3   rounded-r-xl'>
                        12pm, May 2
                    </td>
                </tr>

                
            </tbody>
            
      </table>
     </div>
    </section>
  )
}
