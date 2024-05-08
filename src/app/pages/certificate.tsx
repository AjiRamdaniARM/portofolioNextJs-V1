import React from 'react';
import "../styles/style.scss"
import Link from 'next/link';
export default function Certificate() {


  return (
    <section className='container lg:p-12 bg-co w-full lg:bg-black lg:border lg:border-gray-900 lg:hover:border-[#DE2FF7] transition-colors lg:bg-opacity-50 lg:backdrop-blur'>
    <div className="content-1  flex flex-wrap justify-between items-start relative"> 
        <div className="group w-62 py-4 lg:py-2">
            <h1 className='lg:text-[60px] text-4xl text-start  lg:leading-[55px] tracking-tight font-bold py-3'>
                <span className='text-[#ecedee]'>Let`s check it out</span>  <br />
                <span className='text-[##DE2FF7] bg-gradient-to-r from-[#DE2FF7] to-[#d706f3] bg-clip-text text-transparent'>Certification</span>
            </h1>
            <p className=' lg:w-[30em] lg:text-[20px] text-[#A1A1AA] font-semibold'>certifcate - certificate that has been held </p>
            <div className="button py-5">
                <Link href="https://drive.google.com/drive/folders/1KxH3hZhv2jHnI7w8S0EcDJ9ohW4gP5iv?usp=drive_link" className=' '> 
                    <div className=" py-2 bg-[#d777dc] hover:bg-[#ca50d8] transition-background rounded-full px-5 w-48 flex items-start gap-2 hover:gap-3">
                    Cek Certification  
                        <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 12.5H19M19 12.5L13 18.5M19 12.5L13 6.5" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                </Link>
            </div>
        </div>
        <div className="group flex flex-wrap items-start gap-4">
            <div className="card-group ">
                <a href="https://www.instagram.com/p/C0nY7zhPo_3/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" className="block max-w-sm p-4 w-[20em] h-[10em] bg-[#0D0D14] shadow-md border border-gray-200/10 rounded-lg  ">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-white ">Wbdeveloper competition</h5>
                    <p className="font-normal text-gray-400 dark:text-gray-400">Web developer competition at SMK level throughout Indonesia, Session 1, 7th out of 400 people.</p>
                </a>
            </div>
            <div className="card-group ">
                <a href="#" className="block max-w-sm p-5 w-[20em] h-[10em] bg-[#0D0D14] shadow-md border border-gray-200/10 rounded-lg  ">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-white ">Course Ux Design Google </h5>
                    <p className="font-normal text-gray-400 dark:text-gray-400">Get a scholarship for Ux Design course from Google for 4 months.</p>
                </a>
            </div>
        </div>
    </div>
  
  
</section>

  );
}
