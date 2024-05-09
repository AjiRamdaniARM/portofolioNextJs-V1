import Link from 'next/link';
import React from 'react';

export default function Rewards() {


  return (
    <section className='container lg:p-12'>
        <div className="grup flex flex-wrap gap-10">
            <div className="group w-62 py-4  lg:py-2">
                <h1 className='lg:text-[60px] text-4xl text-start text-white  lg:leading-[55px] tracking-tight font-bold py-3'>
                    <span className='text-[#ecedee]'>list of awards that</span>  <br />
                    <span className='text-[##368DF1] bg-gradient-to-r from-[#368DF1] to-[#1c75dc] bg-clip-text text-transparent'>have been </span> received.
                </h1>
                <p className=' lg:w-[30em] lg:text-[20px] text-[#A1A1AA] font-semibold'>Awards received from scholarships, design competitions and courses. <Link href='https://drive.google.com/drive/folders/1KxH3hZhv2jHnI7w8S0EcDJ9ohW4gP5iv?usp=drive_link'>
                <button className='bg-[#19191C] text-white py-1 px-4 rounded-lg text-[14px]'>Certificate</button>
                </Link> </p>  
            </div>
            
            <div className="code hover:scale-105 transition hover:shadow-2xl hover:border hover:border-blue-500 hover:to-[#0e3e75] hover:from-[#368DF1] hover:border-gradient-to-r   bg-[#0D0B0B] lg:p-8 p-5 rounded-xl shadow-md">
                <div className="head relative bottom-5 flex gap-2 items-center h-10">
                    <div className="circle1 bg-[#F31260] w-3 h-3 rounded-full "></div>
                    <div className="circle2 bg-[#F5A524] w-3 h-3 rounded-full"></div>
                    <div className="circle3 bg-[#17C964] w-3 h-3 rounded-full"></div>
                    <div className="text px-5 lg:px-52">
                        <code className='text-gray-600'>file.rewards.tsx</code>
                    </div>
                </div>
                <div className="codebox lg:text-[1em] text-[10px] ">
                    <code>
                      <span className='text-blue-500'>{(`<rewards>`)}</span>
                      <br />&nbsp;&nbsp;
                      <span className='text-pink-500'>{(`<list-rewards>`)}</span>
                      <br />&nbsp;
                        &nbsp; <span className='text-white'>{(`<01>`)}</span>
                        &nbsp; <span className='text-yellow-400'>Beasiswa Sharing The Dream Scholarship 2022</span>  <span className='text-white'>{(`</01>`)}</span>
                        <br />&nbsp;
                        &nbsp; <span className='text-white'>{(`<02>`)}</span>
                        &nbsp; <span className='text-yellow-400'>Beasiswa Sharing The Dream Scholarship 2023</span>  <span className='text-white'>{(`</02>`)}</span>
                        <br />&nbsp;
                        &nbsp; <span className='text-white'>{(`<03>`)}</span>
                        &nbsp; <span className='text-yellow-400'>Juara 1 Lomba Desain Grafis, Bem Creativity Contest 2022</span>  <span className='text-white'>{(`</03>`)}</span>
                        <br />&nbsp;
                        &nbsp; <span className='text-white'>{(`<04>`)}</span>
                        &nbsp; <span className='text-yellow-400'>Juara 2 Lomba Desain Grafis</span>  <span className='text-white'>{(`</04>`)}</span>
                        <br />&nbsp;
                        &nbsp; <span className='text-white'>{(`<05>`)}</span>
                        &nbsp; <span className='text-yellow-400 '>Juara Favorit Lomba Poster <br /> &nbsp; &nbsp; Edukasi Kesehatan Pekan ASI se-Dunia 2023</span>  <span className='text-white'>{(`</05>`)}</span>
                        <br />&nbsp;
                        &nbsp; <span className='text-white'>{(`<06>`)}</span>
                        &nbsp; <span className='text-yellow-400 '>Course Desain UX Google Spesialisasi</span>  <span className='text-white'>{(`</06>`)}</span>
                        <br />&nbsp;
                        &nbsp; <span className='text-white'>{(`<07>`)}</span>
                        &nbsp; <span className='text-yellow-400 '>Design Poster terbaik ke 6 </span>  <span className='text-white'>{(`</07>`)}</span>


                        <br />&nbsp;&nbsp;
                        <span className='text-pink-500'>{(`</list-rewards>`)}</span>
                        <br />
                        <span className='text-blue-500'>{(`</rewards>`)}</span>
                     
                    </code>
                </div>
            </div>



        </div>
    </section>
  );
}
