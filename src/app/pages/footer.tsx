import React from 'react';
import "../styles/style.scss";

export default function Footer() {
  return (
    <section className=' mx-auto py-10 left-0 right-0 text-center flex flex-col justify-center items-center'>
        <div className="block">
          
            <div className='text-gray-600 font-semibold py-2'>&copy; 2024 AriDev Inc.</div>
            <h1 className='font-bold inter text-white'>Deployed on ARIDEV</h1>
        </div>
    </section>
  );
}
