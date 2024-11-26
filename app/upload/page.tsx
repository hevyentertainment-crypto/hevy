"use client"
import Footer from '@/components/footer'
import Nav from '@/components/nav'
import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectFade, Autoplay } from 'swiper/modules'
import "swiper/css/navigation";
import 'swiper/css/effect-fade';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';
import 'swiper/css';
import 'swiper/css/effect-cards';
import swiper_1 from "@/public/images/Rema-scaled.jpg"
import swiper_2 from "@/public/images/a77387408f324aca89e9aa977daf7fad.jpg"
import swiper_3 from "@/public/images/c9e9a72f4123a90d87360420c23f846b.jpg"
import Image, { StaticImageData } from 'next/image'
import Headers from '@/components/headers'
import Inputs from '@/components/inputs'
import { FaTimes } from 'react-icons/fa'


export type Forms = {
  name: string,
    email: string,
    song_title: string,
    featured_artist: string,
    release_data: string,
    genre: string,
    sub_genre: string,
    year: string,
    producer: string,
    writer: string,
    track_moods: string[],
    hometown: string,
    current_base: string,
    tiktok: string,
    instagram: string
}

const effectImages = [
    swiper_2,
    swiper_1,
    swiper_3
]

const trackMoods = [
  'Heartbreak',
  'Motivation',
  'Sexy',
  'Party',
  'Romance',
  'Feel Good',
  'Feeling Blue',
  'Fierce',
  'Sleep',
  'Chill',
  'Focus',
  'Sad',
  'Energetic',
  'Happy'
]

export default function Upload() {
  const [formStep, setFormStep] = useState(1);
  const [showMoodes, setShowMoods] = useState(false)
  const [showPackage, setShowPackage] = useState(false)
  const [formData, setFormData] = useState<Forms>({
    name: '',
    email: '',
    song_title: '',
    featured_artist: '',
    release_data: '',
    genre: '',
    sub_genre: '',
    year: '',
    producer: '',
    writer: '',
    track_moods: [] as string[],
    hometown: '',
    current_base: '',
    tiktok: '',
    instagram: ''
  })
  // State for file uploads
  const [lyricsFile, setLyricsFile] = useState<File | null>(null);
  const [audioFile, setAudioFile] = useState<File | null>(null);
  const [coverArtFile, setCoverArtFile] = useState<File | null>(null);

  // State for errors
  const [errors, setErrors] = useState<string>("");

  // Supported file types
  const supportedLyricsTypes = ["application/pdf", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"];
  const supportedAudioTypes = ["audio/wav", "audio/mpeg"];
  const supportedImageTypes = ["image/jpeg", "image/png"];



  // Handler for file upload
  const handleFileUpload = (
    e: React.ChangeEvent<HTMLInputElement>,
    type: string
  ) => {
    const file = e.target.files ? e.target.files[0] : null;
    if (!file) return;

    // Validate file types
    let isValid = false;
    if (type === "lyrics" && supportedLyricsTypes.includes(file.type)) {
      setLyricsFile(file);
      isValid = true;
    } else if (type === "audio" && supportedAudioTypes.includes(file.type)) {
      setAudioFile(file);
      isValid = true;
    } else if (type === "cover" && supportedImageTypes.includes(file.type)) {
      setCoverArtFile(file);
      isValid = true;
    }

    // Show error message if invalid
    if (!isValid) {
      setErrors(`Invalid file type for ${type}. Please upload a valid file.`);
    } else {
      setErrors("");
    }
  };

  // Submit handler
  const handleSubmit = () => {
    if (!lyricsFile || !audioFile || !coverArtFile) {
      setErrors("Please upload all required files.");
      return;
    }
    console.log({
      lyrics: lyricsFile.name,
      audio: audioFile.name,
      coverArt: coverArtFile.name,
    });
    alert("Files uploaded successfully!");
  };


  const handleChange = (target: {name: string, value:string}) => {
    const {name, value} = target
    setFormData((prev: Forms) => ({
        ...prev,
        [name]: value
    }));
  }

  const handleMood = (mood: string) => {

    if(formData.track_moods.includes(mood)){
      const filteredMoods = formData.track_moods.filter((item) => item !== mood);
      setFormData((prev) => ({
        ...prev,
        track_moods: filteredMoods
      }))
     }else{
      setFormData((prev) => ({
        ...prev,
          track_moods: [...prev.track_moods, mood]
      }))
     }
   
  }


useEffect(() => {
  if(formStep > 7){
    setFormStep(1)
  }else if(formStep < 1){
    setFormStep(1)
  }
}, [formStep])
  console.log(formData)
  return (
    <>
        <Nav />
        <section className='w-screen h-screen relative'>
            {/* Package overlay */}
            {
              showPackage && (
                <div className='bg-black/80 w-screen h-screen fixed top-0 z-50 flex items-center justify-center'>
                    <button onClick={() => setShowPackage(false)} className='absolute right-10 top-5 text-white text-xl p-3 bg-primary rounded-full hover:bg-red-500'><FaTimes /></button>
                    <div className='w-[70%] h-[90%] p-5 flex justify-between'>
                        <div className="bg-white w-[30%] h-full rounded-xl px-5 flex flex-col justify-between pb-5">
                          <div>
                            <h2 className='font-semibold text-2xl p-5 text-center'>Hevy Gbedu</h2>
                            <div className='text-center flex items-end justify-center'>
                              <h2 className='text-4xl font-semibold'>$3</h2>
                              <span>million</span>
                            </div>

                            <div className='py-10 text-[9px] space-y-3'>
                                <p>
                                  <span className='font-semibold'>Brand Building: </span>
                                  <span>Brand positioning strategy with limited consultations</span>
                                </p>
                                <p>
                                  <span className='font-semibold'>Targeted Social Campaigns (TSC): </span>
                                  <span>Focused social media ad strategy.</span>
                                </p>
                                <p>
                                  <span className='font-semibold'>Radio and TV Ads: </span>
                                  <span>Modearte placements on select outlets.</span>
                                </p>
                                <p className='font-semibold text-[10px]'>Premium placements across major media outlets.</p>
                                <p>
                                  <span className='font-semibold'>Brand Development: </span>
                                  <span>Customized brand growth plans and inflencer collaborations</span>
                                </p>
                                <p>
                                  <span className='font-semibold'>Video, Radio Campaigns: </span>
                                  <span>Full-scale video and radio content production.</span>
                                </p>
                                <p>
                                  <span className='font-semibold'>Press Kit Development (EPKs): </span>
                                  <span>Professionally designed, high-quality EPKs.</span>
                                </p>
                                <p>
                                  <span className='font-semibold'>Data Analytics Access: </span>
                                  <span>Full access to advanced data and metrics for performance analysis.</span>
                                </p>
                                <p>
                                  <span className='font-semibold'>Comprehensive Digital Distribution: </span>
                                  <span>Global distribution on all major platforms with priority placement.</span>
                                </p>
                            </div>
                          </div>


                            <button className='bg-black w-full rounded-lg py-2 text-white '>
                              Select
                            </button>
                        </div>
                        <div className="bg-white w-[30%] h-full rounded-xl px-5 flex flex-col justify-between pb-5">
                          <div>
                              <h2 className='font-semibold text-2xl p-5 text-center'>Hevy Jams</h2>
                                <div className='text-center flex items-end justify-center'>
                                  <h2 className='text-4xl font-semibold'>Free</h2>
                                </div>

                            <div className='py-10 text-[9px] space-y-3'>
                                <p>
                                  <span className='font-semibold'>Brand Building: </span>
                                  <span>General brand-building advice and resources.</span>
                                </p>

                                <p>
                                  <span className='font-semibold'>Data Analytics Access: </span>
                                  <span>Basic insights and reports.</span>
                                </p>

                                <p>
                                  <span className='font-semibold'>Comprehensive Digital Distribution: </span>
                                  <span>Basic distribution on platforms.</span>
                                </p>
                            </div>
                          </div>
                            <button className='bg-black w-full rounded-lg py-2 text-white '>
                              Select
                            </button>
                        </div>
                        <div className="bg-white w-[30%] h-full rounded-xl px-5 pb-5 flex flex-col justify-between">
                            <div>
                              <h2 className='font-semibold text-2xl p-5 text-center'>Hevy Banger</h2>
                              <div className='text-center flex items-end justify-center'>
                                <h2 className='text-4xl font-semibold'>$5.5</h2>
                                <span>million</span>
                              </div>

                            <div className='py-10 text-[9px] space-y-3'>
                                <p>
                                  <span className='font-semibold'>Financial Support: </span>
                                  <span>Full sponsorship for project development and marketing.</span>
                                </p>
                                <p>
                                  <span className='font-semibold'>Brand Building: </span>
                                  <span>In-depth strategy, brand positioning, and development with personal consultations.</span>
                                </p>
                                <p>
                                  <span className='font-semibold'>Media Tranining: </span>
                                  <span>Personalized coaching sessons, speech practice, and interviews.</span>
                                </p>
                                <p>
                                  <span className='font-semibold'>Single License Deal: </span>
                                  <span>Access to an exclusive licensing deal for single distribution.</span>
                                </p>
                                <p>
                                  <span className='font-semibold'>Targeted Social Campaigns (TSC): </span>
                                  <span>Comprehensive social media advertising stategy.</span>
                                </p>
                                <p>
                                  <span className='font-semibold'>Radio, TV, Snapchat Ads: </span>
                                  <span>Premium placements across major media outlets.</span>
                                </p>
                                <p>
                                  <span className='font-semibold'>Brand Development: </span>
                                  <span>Customized brand growth plans and influencer collaborations.</span>
                                </p>
                                <p>
                                  <span className='font-semibold'>Video, Radio Campaigns: </span>
                                  <span>Full-scale video and radio content production.</span>
                                </p>
                                <p>
                                  <span className='font-semibold'>Press Kit Development (EPKs): </span>
                                  <span>Professionally designed, high-quality EPKs.</span>
                                </p>
                                <p>
                                  <span className='font-semibold'>Data Analytics Access: </span>
                                  <span>Full access to advanced data and metics for performance analysis.</span>
                                </p>
                                <p>
                                  <span className='font-semibold'>Comprehensive Digital Distribution: </span>
                                  <span>Global distribution on all major platforms with priority placement.</span>
                                </p>
                            </div>
                            </div>


                            <button onClick={handleSubmit} className='bg-black w-full rounded-lg py-2 text-white '>
                              Select
                            </button>
                        </div>
                    </div>
                </div>
                )
              }

            <div className='absolute w-full h-full -top-6'>
            `<Swiper
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
            <div className='absolute w-full h-full bg-black/70 z-10 flex p-banner-clamp text-white items-center justify-between'>
                  <div className='w-full sm:w-1/3'>
                    <Headers title='Hevy Sounds' />
                    <p className='mt-3 text-secondary font-semibold'>Stand out with us</p>
                  </div>

                  <div className='w-1/3 h-fit bg-white backdrop-blur-lg rounded-lg p-10 flex flex-col justify-between'>
                      <div className='text-black'>
                          <div className='pb-5 flex justify-between'>
                            <div className={`border-2 ${formStep === 1 && 'border-main'} border-gray-300 w-[50px] rounded-full`}></div>
                            <div className={`border-2 ${formStep === 2 && 'border-main'} border-gray-300 w-[50px] rounded-full`}></div>
                            <div className={`border-2 ${formStep === 3 && 'border-main'} border-gray-300 w-[50px] rounded-full`}></div>
                            <div className={`border-2 ${formStep === 4 && 'border-main'} border-gray-300 w-[50px] rounded-full`}></div>
                            <div className={`border-2 ${formStep === 5 && 'border-main'} border-gray-300 w-[50px] rounded-full`}></div>
                            <div className={`border-2 ${formStep === 6 && 'border-main'} border-gray-300 w-[50px] rounded-full`}></div>
                          </div>
                          {
                            formStep === 1 && (
                              <div>
                                <h1 className='text-xl font-semibold'>We Need your Details to Begin</h1>

                                <div className='py-5 space-y-3'>
                                    <Inputs label='Full name' onChange={handleChange} name='name' value={formData.name} />
                                    <Inputs label='Email' type='email' onChange={handleChange} name='email' value={formData.email} />
                                </div>
                              </div>
                            )
                          }

                          {
                            formStep === 2 && (
                              <div>
                                <h1 className='text-xl font-semibold'>Hevy Sounds</h1>

                                <div className='py-5 space-y-3'>
                                  <Inputs label='Song title' onChange={handleChange} name='song_title' value={formData.song_title} />
                                  <Inputs label='Featured artists' onChange={handleChange} name='featured_artist' value={formData.featured_artist} />
                                  <Inputs label='Release data' onChange={handleChange} name='release_data' type='date' value={formData.release_data} />

                                  <div>
                                    <label htmlFor="description" className='text-xs font-semibold'>Song Description</label>
                                    <textarea name="description" id="" cols={3} className='w-full border p-2'></textarea>
                                  </div>
                                </div>
                              </div>
                            )
                          }

                          {
                            formStep === 3 && (
                              <div>
                                <h1 className='text-xl font-semibold'>Hevy Sounds</h1>

                                <div className='py-3 space-y-3'>
                                  <Inputs label='Genre' onChange={handleChange} name='genre' value={formData.genre} />
                                  <Inputs label='Sub genre' onChange={handleChange} name='sub_genre' value={formData.sub_genre} />
                                  <Inputs label='Year of recording' onChange={handleChange} name='year' type='number' value={formData.year} />
                                </div>
                              </div>
                            )
                          }

                          {
                            formStep === 4 && (
                              <div>
                                <h1 className='text-xl font-semibold'>Hevy Sounds</h1>

                                <div className='py-3 space-y-3'>
                                  <Inputs label='Song writer' onChange={handleChange} name='writer' value={formData.writer} />
                                  <Inputs label='Producer' onChange={handleChange} name='producer' value={formData.producer} />

                                  <div className='relative'>
                                    <label htmlFor="" className='text-xs font-semibold'>Track mood</label>
                                    <input onClick={() => setShowMoods(true) } type="text" onChange={() => {}} value={formData.track_moods.join(', ')} className='w-full border-2 p-2 text-xs' />

                                   {
                                      showMoodes && (
                                        <div className='absolute -bottom-26 px-3 py-10 rounded bg-secondary flex flex-wrap gap-3 shadow-xl shadow-gray-900'>
                                            <button onClick={() => setShowMoods(false)} className='text-xl text-white absolute right-5 top-5'>
                                              <FaTimes  />
                                            </button>
                                            {
                                              trackMoods.map((mood, index) =>
                                                <button onClick={() => handleMood(mood)} key={index} className={`${formData.track_moods.includes(mood) ? 'bg-white text-black' : 'text-white ' } border border-white rounded p-2 text-xs  hover:bg-white hover:text-black`}>{mood}</button>
                                              )
                                            }
                                        </div>
                                      )
                                   }
                                  </div>
                                </div>
                              </div>
                            )
                          }

                          {
                            formStep === 5 && (
                              <div>
                                <h1 className='text-xl font-semibold'>Hevy Sounds</h1>

                                <div className='py-3 space-y-3'>
                                      <Inputs label='Hometowon' onChange={handleChange} name='hometown' value={formData.hometown} />
                                      <Inputs label='Currently based' onChange={handleChange} name='current_base' value={formData.current_base} />
                                      <Inputs label='Tiktok handle' onChange={handleChange} name='tiktok' value={formData.tiktok} />
                                      <Inputs label='Instagram handle' onChange={handleChange} name='instagram' value={formData.instagram} />
                                </div>
                              </div>
                            )
                          }

                          {
                            formStep === 6 && (
                              <div >
                                <h1 className='text-xl font-semibold'>Hevy Sounds</h1>

                                <div className="my-4">
                                  <label className="block text-sm font-semibold text-gray-700 mb-1">
                                    Upload Song Lyrics
                                  </label>
                                  <input
                                    type="file"
                                    accept=".pdf,.docx"
                                    onChange={(e) => handleFileUpload(e, "lyrics")}
                                    className="hidden"
                                    id="upload-lyrics"
                                  />
                                  <label
                                    htmlFor="upload-lyrics"
                                    className="border border-dashed border-gray-300 rounded-md p-3 text-center text-gray-500 cursor-pointer hover:border-blue-400 hover:text-blue-600 transition block text-xs"
                                  >
                                    {lyricsFile ? lyricsFile.name : "Click to upload File (.docx, .pdf)"}
                                  </label>
                                </div>

                                {/* Upload Audio File */}
                                <div className="mb-4">
                                  <label className="block text-sm font-semibold text-gray-700 mb-1 ">
                                    Upload Audio File
                                  </label>
                                  <input
                                    type="file"
                                    accept=".wav,.mp3"
                                    onChange={(e) => handleFileUpload(e, "audio")}
                                    className="hidden"
                                    id="upload-audio"
                                  />
                                  <label
                                    htmlFor="upload-audio"
                                    className="border border-dashed border-gray-300 rounded-md p-3 text-center text-gray-500 cursor-pointer hover:border-blue-400 hover:text-blue-600 transition block text-xs"
                                  >
                                    {audioFile ? audioFile.name : "Click to upload Audio file (Wave/MP3 file)"}
                                  </label>
                                </div>

                                {/* Upload Cover Art */}
                                <div className="mb-4">
                                  <label className="block text-sm font-semibold text-gray-700 mb-1">
                                    Upload Covert Art
                                  </label>
                                  <input
                                    type="file"
                                    accept=".jpg,.jpeg,.png"
                                    onChange={(e) => handleFileUpload(e, "cover")}
                                    className="hidden"
                                    id="upload-cover"
                                  />
                                  <label
                                    htmlFor="upload-cover"
                                    className="border border-dashed border-gray-300 rounded-md p-3 text-center text-gray-500 cursor-pointer hover:border-blue-400 hover:text-blue-600 transition block text-xs"
                                  >
                                    {coverArtFile ? coverArtFile.name : "Click to upload Covert Art"}
                                  </label>
                                </div>

                                {errors && <p className="text-red-500 text-sm mb-4">{errors}</p>}

                              </div>
                            )
                          }
                      </div>
                      <p className='flex justify-between'>
                        <button onClick={() => setFormStep(formStep - 1)} disabled={formStep === 1} className='border-2 w-[45%] py-2 rounded border-black text-sm text-black hover:bg-black hover:text-white'>Back</button>
                        <button  onClick={() => setFormStep(formStep + 1)} disabled={formStep === 6} className={`${formStep === 6 && 'hidden'} w-[45%] bg-main hover:bg-main/90 rounded`}>
                         Continue
                        </button>
                        
                        <button  onClick={() => setShowPackage(true)} className={`${formStep <= 5 && 'hidden'} w-[45%] bg-main hover:bg-main/90 rounded`}>
                          Select Package
                        </button>

                      </p>
                  </div>
            </div>
        </section>
        <Footer />
    </>
  )
}
