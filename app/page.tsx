"use client"
import Artists from "@/components/artists";
import ComingSoon from "@/components/comingSoon";
import Footer from "@/components/footer";
import Latest from "@/components/latest";
import Nav from "@/components/nav";
import Services from "@/components/services";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [visible, setVisible] = useState(false)
  return ( 
    <section className="w-screen h-screen">
          <Nav />
         {visible && <ComingSoon setVisible={() => setVisible(false)} />}
          {/* Banner */}
         <div className="w-full h-full relative">
            <div className="absolute w-screen h-screen">
                <div className='text-sm relative h-full flex items-center justify-center overflow-hidden  bg-gray-200 w-screen'>    
                                        <video 
                                            className="absolute inset-0 object-cover w-full h-full"
                                            autoPlay
                                            loop
                                            muted
                                            playsInline
                                        >
                                          <source src="/images/1119(1).mp4" type="video/mp4" />
                                        </video>
              </div>
                </div>
              <div className="flex h-full gap-8 text-white flex-col justify-center px-banner-clamp w-full sm:w-[50%] absolute bg-gradient-to-r sm:via-black/70 from-black/90 to-transparent">
                    <h1 className="text-[3rem] min-[300px]:text-[5rem] sm:text-[10rem] font-semibold leading-[3rem] min-[300px]:leading-[5rem] sm:leading-[8rem]">
                        BRAND YOUR STYLE
                    </h1>
                    <Link href={'https://forms.gle/vaufdL6mb2wzeBov5'} target='_blank'  className="bg-transparent border border-white px-10 py-4 rounded-md text-sm min-[300px]:text-xl w-fit">
                        Upload Music
                    </Link>
                </div>
         </div>
          <Artists />
          <Services />
          <Latest />
          <Footer />
    </section>
  );
}
