"use client"
import Artists from "@/components/artists";
import Footer from "@/components/footer";
import Headers from "@/components/headers";
import Latest from "@/components/latest";
import Nav from "@/components/nav";
import Services from "@/components/services";


export default function Home() {
  return ( 
    <section className="w-screen h-screen">
          <Nav />
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
              <div className="flex h-full gap-5 text-white flex-col justify-center px-banner-clamp w-full sm:w-[50%] absolute bg-gradient-to-r sm:via-black/70 from-black/90 to-transparent">
                    <Headers title="Brand your style"  />
                    <h2 className="text-xl">
                        <p>We Promote</p>
                        <p>We Evolve</p>
                    </h2>
                </div>
         </div>
          <Artists />
          <Services />
          <Latest />
          <Footer />
    </section>
  );
}
