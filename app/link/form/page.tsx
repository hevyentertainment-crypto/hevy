"use client"
import { useState, ChangeEvent } from "react";
import Image from "next/image";
import { TbArrowsExchange2 } from "react-icons/tb";
import { useRouter } from "next/navigation";
// Type for platform input props
interface PlatformInputProps {
  label: string;
  icon: string;
}

export default function Home() {
  const [image, setImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [formStep, setFormStep] = useState(1);
  const route = useRouter();

  // Handle Image Upload
  const handleImageUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImage(file);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  return (
    <div className="min-h-screen bg-white p-6 md:py-10 md:px-32 font-sans">
      {/* Header */}
      <header className="flex justify-between items-center mb-8">
        <h1 className="text-4xl sm:text-8xl font-extrabold text-blue-600">HEVY SOUNDS</h1>
        {/* <span className="text-gray-500 text-sm">LINK GENERATOR</span> */}
      </header>

      {/* Back Button */}
      <button
        onClick={() => setFormStep(1)}
        className="text-blue-600 mb-4 flex items-center hover:text-black transition font-semibold text-md"
      >
        ← Back
      </button>

      {/* Form Layout */}
      {
        formStep === 1 && (
          <div className="flex gap-10 justify-center py-10">
              <div className="relative w-1/3 h-[500px] max-sm:hidden ">
                <Image 
                  src={'/images/328460423_154863884017384_5731560535556506618_n-768x960.jpg'}
                  fill
                  alt="Display image"
                  className="object-cover rounded"
                />
              </div>

              <div className="flex flex-col gap-5 justify-center">
                <div>
                  <label htmlFor="name">Artist Name</label>
                  <input className="w-full border border-gray-300 rounded p-2 focus:ring-2 focus:ring-blue-600 outline-none" />
                </div>

                <div>
                  <label htmlFor="name">Song Title</label>
                  <input className="w-full border border-gray-300 rounded p-2 focus:ring-2 focus:ring-blue-600 outline-none" />
                </div>

                <div>
                  <label htmlFor="name">Year of Recording</label>
                  <input type="number" className="w-full border border-gray-300 rounded p-2 focus:ring-2 focus:ring-blue-600 outline-none" />
                </div>
              </div>
          </div>
        )
      }

      {formStep === 2 && <div className="flex sm:flex-row flex-col gap-8 justify-between h-full py-5">
        {/* Form Section */}
        <div className="space-y-6 sm:w-[60%]">
          {/* Platform Input Fields */}

          <div className="flex justify-between items-center gap-3">
                <div className="w-1/2">
                    <PlatformInput label="Boomplay" icon="/icons/music-service_boomplay_updated 1.svg" />
                </div>
                <div className="w-1/2">
                    <PlatformInput label="YouTube" icon="/icons/music-service_youtube 1.svg" />
                </div>
          </div>
          <div className="flex justify-between items-center gap-3">
                <div className="w-1/2">
                    <PlatformInput label="Spotify" icon="/icons/music-service_spotify 1.svg" />
                </div>
                <div className="w-1/2">
                    <PlatformInput label="TIDAL" icon="/icons/music-service_tidal 1.svg" />
                </div>
          </div>
          <div className="flex justify-between items-center gap-3">
                <div className="w-1/2">
                <PlatformInput label="iTunes Store" icon="/icons/music-service_itunes 1.svg" />
                </div>
                <div className="w-1/2">
                <PlatformInput label="Deezer" icon="/icons/music-service_deezer 1.svg" />
                </div>
          </div>

          <div className="flex justify-between items-center gap-3">
                <div className="w-1/2">
                    <PlatformInput label="Amazon Music" icon="/icons/music-service_amazon 1.svg" />
                </div>
          </div>
        </div>

        {/* Image Upload Section */}
        <div className="w-full max-sm:h-[300px] sm:w-[30%] border-2 border-dashed border-gray-300 p-8 rounded-md flex justify-center items-center relative">
          {imagePreview ? (
           <>
             <Image
              fill
              src={imagePreview}
              alt="Uploaded Preview"
              className="w-full h-full rounded-md mb-4 object-cover"
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
              <span className="text-4xl">📷</span>
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
       <div className="flex gap-4 mt-8">
           {formStep === 2 &&  <button onClick={() => route.push('/link/preview') } className="py-2 w-full sm:w-[20%] border border-blue-600 text-blue-600 rounded hover:bg-blue-50">
              Preview
            </button>}
           { formStep === 1 && <button onClick={() => setFormStep(2)} className="w-full sm:w-[20%] py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
              Continue
            </button>}
          </div>
    </div>
  );
}

// Platform Input Field Component
const PlatformInput = ({ label, icon }: PlatformInputProps) => {
  return (
    <div className="flex items-center space-x-4 w-full">
      
      <div className="flex-1">
        <label
          htmlFor={label.toLowerCase().replace(" ", "-")}
          className="block mb-1 text-gray-700 font-medium"
        >
          <Image src={icon} alt={`${label} Logo`} width={80} height={30} />
        </label>
        <input
          id={label.toLowerCase().replace(" ", "-")}
          type="text"
          placeholder="Enter the link"
          className="w-full border border-gray-300 rounded p-2 focus:ring-2 focus:ring-blue-600 outline-none"
        />
      </div>
    </div>
  );
};
