"use client"
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import DanceIcons from "@/components/danceIcons";
import Cookies from 'js-cookie';

export default function Link() {
  const [backgroundPosition, setBackgroundPosition] = useState("0% 0%");
  const route = useRouter();


  const signOut = () => {
    Cookies.remove('token');
    route.push('/auth')
  }  
  // Simple motion for the background gradient
  useEffect(() => {
      const interval = setInterval(() => {
        setBackgroundPosition(
          `${Math.random() * 100}% ${Math.random() * 100}%`
        );
      }, 3000);
      console.log(backgroundPosition)
      return () => clearInterval(interval);
  }, []);

  return (
    <div
    className="h-screen w-screen flex flex-col items-center justify-center text-center text-white animate-gradient"
    style={{
      background: `radial-gradient(circle at var(--x, 50%) var(--y, 50%), #ff3e4d, #4a00e0)`,
      backgroundSize: "200% 200%",
      animation: "gradientShift 20s infinite alternate ease-in-out",
    }}
  >
      {/* Navbar */}
      <div className="absolute top-5 px-4 text-lg font-semibold flex items-center justify-between w-full">
        <img 
            src="/images/hevy MAIN WHITEE 2.svg"
            className='w-20 h-20'
        />

        <button onClick={signOut} className="border-2 border-white px-4 rounded py-2 text-sm">
          Sign out
        </button>
      </div>
      {/* <div className="absolute top-5 right-5 text-lg font-semibold">Explore</div> */}

      {/* Main Content */}
      <div className="flex flex-col relative">
        <div className="absolute left-1/4 -top-20 rounded-3xl backdrop-blur-xl overflow-hidden icon-float shadow-md shadow-blue-500 border-2">
          <DanceIcons icon="/icons/g10.svg"  />
        </div>
        <div className="absolute -right-16 top-5 max-sm:hidden  backdrop-blur-xl rounded-3xl overflow-hidden icon-float shadow-md shadow-blue-500 border-2">
          <DanceIcons icon="/icons/boomplay_music_icon.jpeg.svg" />
        </div>


        <div className="absolute -right-5 bottom-5  backdrop-blur-xl rounded-3xl overflow-hidden icon-float shadow-md shadow-blue-500 border-2">
          <DanceIcons icon="/icons/deezer.svg" />
        </div>

        <div className="absolute -left-20 bottom-5  backdrop-blur-xl rounded-3xl overflow-hidden icon-float shadow-md shadow-blue-500 border-2">
          <DanceIcons icon="/icons/sportify.svg" />
        </div>

        <h1 className="text-8xl md:text-[12rem] tracking-widest font-semibold">HEVY</h1>
        <h2 className="text-5xl text-center w-full md:text-[5rem] tracking-[1rem] sm:tracking-[1.3rem]">SOUNDS</h2>
      </div>

      <div className="mt-8">
        • LINK GENERATOR •
      </div>

      {/* Buttons */}
      <div className="mt-5 sm:mt-10 flex sm:flex-row flex-col gap-4">
        <button onClick={() => route.push('/link/form')} className="px-20 py-2 bg-black text-white rounded hover:bg-gray-800 transition">
          New Link
        </button>
        <button onClick={() => route.push('/link/history')} className="px-20 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
          History
        </button>
      </div>
    </div>
  );
}


