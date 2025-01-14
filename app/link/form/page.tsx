"use client"
import { useState, ChangeEvent } from "react";
import Image from "next/image";
import { TbArrowsExchange2 } from "react-icons/tb";
import { useRouter } from "next/navigation";
import { SlPicture } from "react-icons/sl";
import Cookies from 'js-cookie';
import Preview from "../preview/page";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Link from "next/link";

interface PlatformInputProps {
  label: string;
  icon: string;
  value?: string;
  onChange: (label: string, value: string) => void;
}

export interface Artist {    
  artistName: string;
  songTitle: string;
  yearOfRecording: string;
}

export interface Platforms {
  [key: string]: string;
}

export default function Home() {
  const [image, setImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [formStep, setFormStep] = useState(1);
  const route = useRouter();
  const [formDetails, setFormDetails] = useState({
    artistName: "",
    songTitle: "",
    yearOfRecording: ""
  })

  const [preview, setPreview] = useState(false);

  const [platforms, setPlatforms] = useState({
    boomplay: "",
    youtube: '',
    spotify: '',
    tidal: '',
    itunes: '',
    deezer: '',
    apple: '',
    soundcloud: '',
    audiomack: '',
    bandcamp: '',
    google: '',
    shazam: '',
    amazon: ''
  });

  const filteredPlatforms = Object.fromEntries(
    Object.entries(platforms).filter(([key, value]) => value !== '')
  );

  console.log(filteredPlatforms);


  const handleInputChange = (label: string, value: string) => {     
    setPlatforms({
      ...platforms,
      [label]: value,
    });
  } 

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormDetails({
      ...formDetails,
      [e.target.name]: e.target.value,
    });
  } 

  const handlePreview = () => {   
    if(image === null){ 
      toast.error('Upload cover art!', {
                      position: "top-center",
                      autoClose: 5000,
                      hideProgressBar: false,
                      closeOnClick: false,
                      pauseOnHover: true,
                      draggable: true,
                      progress: undefined,
                      theme: "dark",
                  });
                } else if (!Object.values(platforms).some(value => value !== '')) {
                  toast.error('Add at least one platform link!', {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                  });
                } else {
    setPreview(true);         
  }
}

  // Handle Image Upload
  const handleImageUpload = (e: ChangeEvent<HTMLInputElement>) => {
   if(e.target.files){
     const file = e.target.files[0];
     setImage(file);
     const reader = new FileReader();
     reader.onload = () => {
       setImagePreview(reader.result as string);
     };
     reader.readAsDataURL(file);
   }
  };



  const signOut = () => {
    Cookies.remove('token');
    route.push('/auth')
  }  

  const handleContinue = () => {
    if(formDetails.artistName !== '' && formDetails.songTitle !== '' ){
      setFormStep(2)
    }else{
      toast.error('Complete this step!', {
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
    <section className="w-screen h-screen relative">
      <ToastContainer />
    {preview ? 
      <Preview setPreview={() => setPreview(false)} artist={formDetails} platforms={platforms} image={imagePreview} postalImage={image} /> : 
      <div className="w-screen h-screen absolute">
        <div className="w-screen h-screen relative">
          <div className="w-screen h-screen absolute">
              <div className="w-screen h-screen relative">
                  <Image 
                    src={'/images/image_fx_ (38).jpg'}
                    alt="Image"
                    fill
                    className="object-cover"
                  />
              </div>
          </div>
          <div className="h-screen  absolute z-50  backdrop-blur-3xl py-6 w-screen md:py-10 md:px-32 font-sans overflow-y-scroll">
            {/* Header */}
            <header className="flex justify-between items-center mb-8 px-3">
              <Link href={'/link'} className="text-2xl sm:text-8xl font-extrabold text-white max-sm:px-6">HEVY SOUNDS</Link>
              <button onClick={signOut} className="border-2 border-white px-4 rounded py-2 text-sm text-white">
                Sign out
              </button>
            </header>

            {/* Back Button */}
          {formStep !== 1 && <button
              onClick={() => setFormStep(1)}
              className="text-white mb-4 flex items-center max-sm:px-6 hover:text-black transition font-semibold text-md"
            >
              ← Back
            </button>}

            {/* Form Layout */}
            {
              formStep === 1 && (
                <div className="flex gap-10 justify-center py-10">
                    <div className="relative w-1/3 h-[500px] max-sm:hidden">
                      <Image 
                        src={'/images/a77387408f324aca89e9aa977daf7fad.jpg'}
                        fill
                        alt="Display image"
                        className="object-cover rounded-xl"
                      />
                    </div>

                    <div className="flex flex-col text-white gap-5 justify-center">
                      <div>
                        <label htmlFor="name">Artist Name</label>
                        <input name="artistName" onChange={handleChange} required value={formDetails.artistName} className="w-full border text-white border-gray-300 bg-transparent rounded p-2 focus:ring-2 focus:ring-blue-600 outline-none" />
                      </div>

                      <div>
                        <label htmlFor="name">Song Title</label>
                        <input name="songTitle" onChange={handleChange} required value={formDetails.songTitle} className="w-full border border-gray-300  text-white bg-transparent rounded p-2 focus:ring-2 focus:ring-blue-600 outline-none" />
                      </div>

                      <div>
                        <label htmlFor="name">Year of Recording</label>
                        <input name="yearOfRecording" onChange={handleChange} required value={formDetails.yearOfRecording} type="number" className="w-full border  text-white bg-transparent border-gray-300 rounded p-2 focus:ring-2 focus:ring-blue-600 outline-none" />
                      </div>
                    </div>
                </div>
              )
            }
            {formStep === 2 && <div className="flex sm:flex-row flex-col gap-8 justify-between h-fit sm:py-20 bg-white sm:px-8 p-5 sm:rounded-xl">
              {/* Form Section */}
              <div className="space-y-6 sm:w-[60%]">
                {/* Platform Input Fields */}

                <div className="flex justify-between items-center gap-3">
                      <div className="w-1/2">
                          <PlatformInput onChange={handleInputChange} value={platforms.boomplay} label="boomplay" icon="/icons/music-service_boomplay_updated 1.svg" />
                      </div>
                      <div className="w-1/2">
                          <PlatformInput onChange={handleInputChange} value={platforms.youtube} label="youtube" icon="https://services.linkfire.com/logo_youtubemusic_onlight.svg" />
                      </div>
                </div>
                <div className="flex justify-between items-center gap-3">
                      <div className="w-1/2">
                          <PlatformInput onChange={handleInputChange} value={platforms.spotify} label="spotify" icon="/icons/music-service_spotify 1.svg" />
                      </div>
                      <div className="w-1/2">
                          <PlatformInput onChange={handleInputChange} value={platforms.tidal} label="tidal" icon="/icons/music-service_tidal 1.svg" />
                      </div>
                </div>
                <div className="flex justify-between items-center gap-3">
                      <div className="w-1/2">
                      <PlatformInput onChange={handleInputChange} value={platforms.itunes} label="itunes" icon="/icons/music-service_itunes 1.svg" />
                      </div>
                      <div className="w-1/2">
                      <PlatformInput onChange={handleInputChange} label="deezer" value={platforms.deezer} icon="/icons/music-service_deezer 1.svg" />
                      </div>
                </div>

                <div className="flex justify-between items-center gap-3">
                      <div className="w-1/2">
                      <PlatformInput onChange={handleInputChange} label="apple" value={platforms.apple} icon="/icons/apple-music.svg" />
                      </div>
                      <div className="w-1/2">
                      <PlatformInput onChange={handleInputChange} label="soundcloud" value={platforms.soundcloud} icon="https://services.linkfire.com/logo_soundcloud_onlight.svg" />
                      </div>
                </div>

                <div className="flex justify-between items-center gap-3">
                      <div className="w-1/2">
                      <PlatformInput onChange={handleInputChange} label="audiomack" value={platforms.audiomack} icon="https://services.linkfire.com/logo_audiomack_onlight.svg" />
                      </div>
                      <div className="w-1/2">
                          <PlatformInput onChange={handleInputChange} label="amazon" value={platforms.amazon} icon="/icons/music-service_amazon 1.svg" />
                      </div>
                      
                </div>

                <div className="flex justify-between items-center gap-3">
                <div className="w-1/2">
                      <PlatformInput onChange={handleInputChange} label="shazam" value={platforms.shazam} icon="/icons/Shazam-Logo-SVG_006.png" />
                      </div>
                </div>
              </div>

              {/* Image Upload Section */}
              <div className="w-full max-sm:h-[300px] sm:w-[30%] sm:max-h-[400px] border-2 border-dashed border-gray-300 p-8 rounded-md flex justify-center items-center relative">
                {imagePreview ? (
                <>
                  <Image
                    fill
                    src={imagePreview}
                    alt="Uploaded Preview"
                    className="w-full h-full  rounded-md mb-4 object-cover"
                  />
                  <label htmlFor="upload" className="absolute z-50 bottom-5 right-5 p-3 rounded-full bg-white shadow-lg shadow-black cursor-pointer text-xl">
                      <TbArrowsExchange2 />
                  </label>
                      <input
                      id="upload"
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={handleImageUpload}
                  />
                </>
                ) : (
                  <label
                    htmlFor="upload"
                    className="flex flex-col items-center text-gray-500 cursor-pointer hover:text-blue-600"
                  >
                    <span className="text-4xl"><SlPicture /></span>
                    <p className="mt-2">
                      Click to Place <span className="text-blue-600">Image</span>
                    </p>
                  </label>
                )}
                <input
                  id="upload"
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handleImageUpload}
                />
              </div>
            </div>}

            {/* Buttons */}
            <div className="flex justify-center gap-4 mt-8">
                {formStep === 2 &&  <button onClick={handlePreview} className="py-2 w-full sm:w-[20%] border max-sm:mx-6 max-sm:bg-main max-sm:text-white border-blue-600 text-blue-600 rounded hover:bg-blue-50">
                    Preview
                  </button>}
                { formStep === 1 && <button onClick={handleContinue} className="w-full max-sm:mx-8 sm:w-[20%] py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
                    Continue
                  </button>}
                </div>
          </div>
      </div>
      </div>
    }
   </section>
  );
}


// Platform Input Field Component
const PlatformInput = ({ label, icon, onChange, value }: PlatformInputProps) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(label, event.target.value);
  };

  return (
    <div className="flex items-center space-x-4 w-full">
      <div className="flex-1">
        <label
          htmlFor={label.toLowerCase().replace(" ", "-")}
          className="block mb-1 text-gray-700 font-medium"
        >
          <Image src={icon} alt={`${label} Logo`} width={100} height={40} />
        </label>
        <input
          id={label.toLowerCase().replace(" ", "-")}
          type="text"
          value={value}
          placeholder="Enter the link"
          className="w-full border border-gray-300 rounded p-2 focus:ring-2 focus:ring-blue-600 bg-transparent"
          onChange={handleChange}
        />
      </div>
    </div>
  );
}