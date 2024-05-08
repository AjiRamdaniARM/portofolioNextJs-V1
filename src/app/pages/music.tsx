'use client'
import React from 'react';
import { useEffect, useState } from 'react';
import  '../styles/module.scss'

interface Song {
  title: string;
  url: string;
  img: string;
}

export default function Music() {
  const [currentSong, setCurrentSong] = useState<Song | null>(null);


  // Peyimpanan data lagu
  const songs: Song[] = [
    { 
     title: 'Aitakatta 2 JKT48 NEW ERA',
     url: 'https://firebasestorage.googleapis.com/v0/b/portofolio-3c1ab.appspot.com/o/Ingin%20Bertemu%20(256).mp3?alt=media&token=3282076c-6e09-42ea-8965-63cb84058581', 
     img: 'https://i.pinimg.com/736x/3c/ce/dd/3cceddcc55b886a1ac1b2911cf2646c0.jpg' },
    { 
      title: 'Bulan & Kesatria', 
      url: 'https://firebasestorage.googleapis.com/v0/b/portofolio-3c1ab.appspot.com/o/ssstik.io_1712092534632.mp3?alt=media&token=51d10f15-7c21-4917-808a-978d4d5e9063' , 
      img: 'http://supermanisdead.net/0admin33/a/image_news/Dibungkam%20Melawan1' },
    { 
      title: 'Kebun Binatang JKT48 NEW ERA', 
      url: 'https://firebasestorage.googleapis.com/v0/b/portofolio-3c1ab.appspot.com/o/JKT48%20New%20Era%20Special%20Performance%20Video%20-%20Kebun%20Binatang%20Saat%20Hujan.mp3?alt=media&token=edb907e3-ff41-4759-b0fd-510025a28ae7' , 
      img: 'https://i.pinimg.com/736x/87/79/16/87791691f90ed601e38ed5bca5413c27.jpg' },
    { 
      title: 'Arah Sang Cinta JKT48', 
      url: 'https://firebasestorage.googleapis.com/v0/b/portofolio-3c1ab.appspot.com/o/Arah%20Sang%20Cinta%20Dan%20Balasannya%20-%20Koi%20No%20Keikou%20To%20Taisaku.mp3?alt=media&token=1fb46b8e-000d-4486-89b4-ec3f1fbf7f50' , 
      img: 'https://i.pinimg.com/736x/6a/77/e5/6a77e58721e8b0a3c380e0d8bb31c49b.jpg' },
    { 
      title: 'DJ Driblee Bagas', 
      url: 'https://firebasestorage.googleapis.com/v0/b/portofolio-3c1ab.appspot.com/o/dj%20bagas.mp3?alt=media&token=63bd9f23-6c26-43ed-866a-172894d75ded' , 
      img: 'https://i.pinimg.com/originals/11/b7/b5/11b7b542a571b1be4fc32fa0b6df824c.gif' },

  ];

  const playSong = (song: Song) => {
    setCurrentSong(song);
  };

  const stopMusic = () => {
    setCurrentSong(null);
  };

  return (
    <div>
     
        <section className="container lg:p-12">
            <div className="content-1">
                <h1 className='lg:text-[80px] text-4xl text-start  lg:leading-[70px]
                tracking-tight font-bold py-6
                '>
               <span className='text-[#ecedee]'>Wearable music</span>  <br />
                <span className=' text-[##FF9B58] bg-gradient-to-r from-[#FF9B58] to-[#fc8231] bg-clip-text text-transparent'>features</span> cool.  
                </h1>
                <p className=' lg:w-[30em] lg:text-[20px] text-[#A1A1AA] font-semibold'>Music captivates, revealing wordless emotions. You`re swept up in the perfect flow, feeling the infinite magic. Done, want more. 
                 <button onClick={stopMusic} className='w-[130px]  h-10 rounded-lg bg-[#18181B]'>Stop Music</button></p>
            </div>
            <div className="music py-10 flex flex-wrap justify-center gap-10">
            {currentSong ? (
        <>
          <div className="max-w-sm mx-auto relative shadow-md transition rounded-lg cursor-pointer">
          <div className="relative w-full mx-auto">
            <img src={currentSong.img} className="w-full h-[40em] object-cover rounded-lg" />
            <div className="absolute  inset-0 flex items-center justify-center">
              <div className="bg-black/90 p-7 rounded-full">
              <div id="sound-bars">
                <span className='spanMusic'></span>
                <span className='spanMusic'></span>
                <span className='spanMusic'></span>
                <span className='spanMusic'></span>
              </div>

              </div>
            </div>
          </div>
                <div className="absolute bottom-1 mx-auto left-0 right-0 lg:w-[23em] h-[60px] bg-black bg-opacity-50 backdrop-blur text-white p-4 rounded-lg">
                  <h1 className="lg:text-[1em] font-semibold flex">{currentSong.title}  
                  </h1>
                  <audio controls autoPlay loop hidden src={currentSong.url} />
                </div>
              </div>
        </>
      ) : (
        <div className="max-w-sm mx-auto relative shadow-md transition rounded-lg cursor-pointer">
        <img src='https://leonardo-cdn.b-cdn.net/wp-content/uploads/2023/07/Default_dodge_challenger_in_a_cyber_punk_landscape_0_7b2c7227-b643-4ea4-8393-c6036723fb99_1.jpeg' className="w-full h-[40em] object-cover rounded-lg" />
      
        <div className="absolute bottom-1 mx-auto left-0 right-0 w-[18em] lg:w-[23em] h-[60px] bg-black bg-opacity-50 backdrop-blur text-white p-4  rounded-lg">
        </div>
      </div>
      )}
              <div className="flex flex-col scroll-smooth focus:scroll-auto gap-10 overflow-y-auto p-3 h-80 lg:h-auto md:h-auto  lg:p-5 ">     
                    {songs.map((song, index) => (
                      <button onClick={() => playSong(song)} key={index}>
                      <div className="card" >
                      <div className="max-w-7xl mx-auto">
                        <div className="relative group">
                          <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                          <div className="relative px-7 py-6 bg-[#18181B] ring-1 ring-gray-900/5 rounded-lg leading-none flex items-top justify-start space-x-6 lg:w-[50em]">
                          <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" className='w-8 h-8' viewBox="0 0 64 64">
                            <linearGradient id="7D9AdVpr60peaWwe5HX4Pa_49479_gr1" x1="31.088" x2="31.088" y1="18.125" y2="42.761" gradientUnits="userSpaceOnUse" spreadMethod="reflect"><stop offset="0" stop-color="#6dc7ff"></stop><stop offset="1" stop-color="#e6abff"></stop></linearGradient><path fill="url(#7D9AdVpr60peaWwe5HX4Pa_49479_gr1)" d="M45.391,32.56c-7.735-4.753-19.05-6.091-28.152-3.329c-1.031,0.314-1.614,1.403-1.303,2.437 c0.314,1.031,1.406,1.614,2.439,1.301c7.968-2.419,18.237-1.219,24.972,2.92c0.918,0.565,2.121,0.277,2.687-0.643 C46.599,34.329,46.31,33.125,45.391,32.56"></path><linearGradient id="7D9AdVpr60peaWwe5HX4Pb_49479_gr2" x1="31.999" x2="31.999" y1="18.125" y2="42.761" gradientUnits="userSpaceOnUse" spreadMethod="reflect"><stop offset="0" stop-color="#6dc7ff"></stop><stop offset="1" stop-color="#e6abff"></stop></linearGradient><path fill="url(#7D9AdVpr60peaWwe5HX4Pb_49479_gr2)" d="M48.691,24.109c-9.3-5.52-24.016-6.04-32.868-3.353c-1.239,0.377-1.937,1.685-1.563,2.924 c0.375,1.238,1.685,1.937,2.923,1.561c7.712-2.34,21.036-1.899,29.114,2.898c1.111,0.661,2.551,0.294,3.212-0.82 C50.17,26.209,49.806,24.77,48.691,24.109"></path><linearGradient id="7D9AdVpr60peaWwe5HX4Pc_49479_gr3" x1="30.046" x2="30.046" y1="18.125" y2="42.761" gradientUnits="userSpaceOnUse" spreadMethod="reflect"><stop offset="0" stop-color="#6dc7ff"></stop><stop offset="1" stop-color="#e6abff"></stop></linearGradient><path fill="url(#7D9AdVpr60peaWwe5HX4Pc_49479_gr3)" d="M42.45,39.922c-6.606-4.036-14.794-4.976-24.341-2.793c-0.842,0.191-1.367,1.029-1.174,1.87 c0.191,0.84,1.029,1.367,1.87,1.174c8.724-1.992,16.13-1.18,22.015,2.416c0.736,0.45,1.698,0.219,2.148-0.519 C43.418,41.334,43.186,40.371,42.45,39.922"></path><linearGradient id="7D9AdVpr60peaWwe5HX4Pd_49479_gr4" x1="31.999" x2="31.999" y1="3.625" y2="57.896" gradientUnits="userSpaceOnUse" spreadMethod="reflect"><stop offset="0" stop-color="#1a6dff"></stop><stop offset="1" stop-color="#c822ff"></stop></linearGradient><path fill="url(#7D9AdVpr60peaWwe5HX4Pd_49479_gr4)" d="M31.999,57c-14.337,0-26-11.663-26-26s11.663-26,26-26s26,11.663,26,26S46.336,57,31.999,57z M31.999,7c-13.233,0-24,10.767-24,24s10.767,24,24,24s24-10.767,24-24S45.232,7,31.999,7z"></path>
                          </svg>
                            <div className="space-y-2">
                              <p className="text-white ">{song.title}</p>
                          
                            </div>
                          </div>
                        </div>
                      </div>
                      </div>
                    </button>
              ))}

            </div>
           
            </div>
        </section>
    </div>
  );
}
