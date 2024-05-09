import Link from 'next/link';
import React from 'react';
import "../styles/style.scss";

export default function Medsos() {
    const medsos = [
        {
        'apk' : 'Instagram',
        'user' : '@ajiramdani_04',
        'link' : 'https://www.instagram.com/ajiramdani_04/',
        },
        {
        'apk' : 'Tiktok',
        'user' : '@ajiramdani_ari',
        'link' : 'https://www.tiktok.com/@ajiramdani_ari',
        },
        {
        'apk' : 'Linkedln',
        'user' : '@aji-ramdani',
        'link' : 'https://www.linkedin.com/in/aji-ramdani-016bb1250/',
        },
        {
        'apk' : 'Github',
        'user' : '@ajiramdani_ari',
        'link' : 'https://github.com/AjiRamdaniARM',
        },
        {
        'apk' : 'X Corp ',
        'user' : '@ajiramdaniAR1',
        'link' : 'https://twitter.com/ajiramdaniAR1',
        },
        {
        'apk' : 'Youtube',
        'user' : '@ajiramdani-ari',
        'link' : 'https://www.youtube.com/@ajiramdani-ari5401',
        },
    ]
  return (
    <section className='container lg:p-12'>

        <div className="flex flex-wrap justify-start items-start">

            <div className="group w-62 py-4 lg:py-2">
                <h1 className='lg:text-[60px] text-4xl text-start  lg:leading-[55px] tracking-tight font-bold py-3'>
                    <span className='text-[#ecedee]'>Let`s check it out</span>  <br />
                    <span className='bg-gradient-to-r from-[#962ff7] to-[#7906f3] bg-clip-text text-transparent'>Media Sosial</span>
                </h1>
                <p className=' lg:w-[30em] lg:text-[20px] text-[#A1A1AA] font-semibold'>certifcate - certificate that has been held </p>
                <div className="button py-5">
                    <Link href="https://linktr.ee/ajiramdani_ari" className=' '> 
                        <div className="text-white py-2 bg-[#A977DC] hover:bg-[#9450d8] transition-background rounded-full px-5 w-48 flex items-start gap-2 hover:gap-3">
                        All Media Sosial  
                            <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5 12.5H19M19 12.5L13 18.5M19 12.5L13 6.5" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </div>
                    </Link>
                </div>
            </div>

            <div className="group">
                <div className="container ">
                    <div className="relative lg:px-10 grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-3 ">
                        {medsos.map((md,index)=> (
                            <div key={index}>
                            <div className="bg-[#0D0D14] hover:scale-105 transition w-72 h-auto rounded-lg shadow-lg">
                                <div className="grup px-5 py-2 flex flex-wrap justify-between items-center gap-10">
                                        <div className="kanan block">
                                            <h2 className="text-1xl font-bold mb-2 neon-txt ">{md.apk}</h2>
                                            <p className='text-gray-500 relative bottom-2'>{md.user}</p>
                                        </div>
                                        <div className="kiri">
                                            <Link href={md.link} className='bg-[#962ff7] px-4 rounded-medium'>Situs</Link>
                                        </div>
                                    </div>     
                                </div>
                            </div>
                        ))}
                       

                      

                    </div>
                </div>
            </div>



        </div>



    </section>
  );
}
