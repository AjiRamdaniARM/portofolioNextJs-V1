import Link from 'next/link';
import React from 'react';

export default function Contact() {
  return (
    <section className='container py-10 mx-auto left-0 right-0'>
        <div className="mx-auto"> 
            <h1 className='lg:text-[60px] text-4xl text-center text-white  lg:leading-[55px] tracking-tight font-bold py-3'>Contact us</h1>
            <p className='text-center py-3 font-semibold text-[#A1A1AA] '>need something or want to use the service? please to consult</p>
        </div>

        <div className="block lg:p-10">
            <div className="grid py-2 grid-cols-1 lg:grid-cols-3 text-white gap-10">

                <Link href="https://mail.google.com/mail/u/0/?view=cm&fs=1&to=hilmankeren0936@gmail.com">
                    <div className="card1 transition ease-in-out delay-150 hover:-translate-y-1  hover:scale-110 lg:p-10 p-5 bg-[#0B0B0C] rounded-large">
                        <div className="head flex gap-2 items-center py-2">
                            <img src="https://logos-world.net/wp-content/uploads/2020/11/Gmail-Logo.png" className='w-10' alt="logo gmail png" />
                            <h1  className='font-bold'>Gmail</h1>
                        </div>
                        <div className="body">
                            <p className='text-[#9999A1]'>Click the box to start a consultation and don`t hesitate to ask questions. </p>
                        </div>
                    </div>
                </Link>

                <Link href="https://wa.me/6289508742700?text=Halo,%20saya%20ingin%20konsultasi.
">               
                    <div className="card1 transition ease-in-out delay-150 hover:-translate-y-1  hover:scale-110 lg:p-10 p-5 bg-[#0B0B0C] rounded-large">
                        <div className="head flex items-center gap-2 py-2">
                        <img src="https://www.freepnglogos.com/uploads/whatsapp-logo-light-green-png-0.png" className='w-10' alt="logo gmail png" />
                            <h1 className='font-bold'>WhatsApp</h1>
                        </div>
                        <div className="body">
                            <p className='text-[#9999A1]'>Click the box to start a consultation and don`t hesitate to ask questions.</p>
                        </div>
                    </div>
                </Link>

                <Link href="https://discord.gg/bwyQwppE">
                <div className="card1 transition ease-in-out delay-150 hover:-translate-y-1  hover:scale-110 lg:p-10 p-5 bg-[#0B0B0C] rounded-large">
                    <div className="head flex items-center gap-2 py-2">
                    <img src="https://static.vecteezy.com/system/resources/previews/018/930/718/original/discord-logo-discord-icon-transparent-free-png.png" className='w-10' alt="logo gmail png" />
                        <h1  className='font-bold'>Discord</h1>
                    </div>
                    <div className="body">
                        <p className='text-[#9999A1]'>Click the box to start a consultation and don`t hesitate to ask questions.</p>
                    </div>
                </div>
                </Link>

            </div>
        </div>
    </section>
  );
}
