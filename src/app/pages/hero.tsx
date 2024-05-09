"use client";
import React from "react";
import Image from "next/image"  
import pp from "../image/PP.png"
import "../styles/style.scss"
import "../styles/globalFont.scss"
import { useState } from 'react';
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure} from "@nextui-org/react";
import Link from "next/link";



export default function Hero() {
  const [showFullText, setShowFullText] = useState(false);
  const [backdrop, setBackDrop] = React.useState('opaque')
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [size, setSize] = React.useState('md');

  const handleOpen = (size: string) => { 
    setSize(size);
    onOpen();
};

  const toggleText = () => {
    setShowFullText(!showFullText);
  };

  const handleDownloadDesign = () => {
    const fileUrl = '/data/Aji_Ramdani-Cv (1).pdf';

    const anchor = document.createElement('a');
    anchor.href = fileUrl;
    anchor.download = 'CV_ATS_AJI RAMDANI_DESIGN';
    anchor.click();
  };
  const handleDownloadCode = () => {
    const fileUrl = '/data/Aji_Ramdani-CV.pdf';

    const anchor = document.createElement('a');
    anchor.href = fileUrl;
    anchor.download = 'CV_ATS_AJI RAMDANI_PROGRAMMER';
    anchor.click();
  };


  
  return (
    <div className="container px-5">

      {/* == cv modal == */}
      <Modal 
        backdrop="opaque"
        isOpen={isOpen} 
        onClose={onClose} 
      >
        <ModalContent className="bg-black border-2 border-l-cyan-400 border-r-blue-800">
          {(onclose) => (
            <>
              <ModalHeader className="flex flex-col inter font-bold gap-1 text-white">Dapatkan CV </ModalHeader>
              <ModalBody>
               <div className="container flex">
               <p className="text-white"><span className="text-cyan-400 font-bold">CV PDF</span> adalah singkatan dari <span className="text-cyan-400 font-bold">Curriculum Vitae dalam format PDF</span>. CV adalah ringkasan riwayat hidup seseorang, yang berisi pendidikan, pengalaman kerja, keterampilan, dan prestasi profesional. <span className="text-cyan-400 font-bold">CV PDF</span> sering digunakan untuk pencarian pekerjaan dan aplikasi pendidikan karena tampilannya yang konsisten di berbagai platform. Anda dapat membuat <span className="text-cyan-400 font-bold">CV PDF</span> menggunakan aplikasi pengolah kata seperti Microsoft Word atau Google Docs, lalu menyimpannya dalam format PDF.</p>
               </div>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" onClick={handleDownloadDesign} >
                  Download CV Design
                </Button>
                <Button color="primary" onClick={handleDownloadCode}  >
                Download CV Programmer
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>


      {/* == end modal == */}
      
      <div className="-z-10 absolute">
        <div className="content1  ">
          <svg width="315" height="360" viewBox="0 0 315 360" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g filter="url(#filter0_f_14_164)">
          <circle cx="135" cy="180" r="30" fill="#0d4df0"/>
          </g>
          <defs>
          <filter id="filter0_f_14_164" x="-45" y="0" width="360" height="360" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix"/>
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
          <feGaussianBlur stdDeviation="75" result="effect1_foregroundBlur_14_164"/>
          </filter>
          </defs>
          </svg>
        </div>
        <div className="content2 absolute left-[10em] lg:left-0 top-52 lg:-top-10">
          <svg width="1" height="103" viewBox="0 0 1 103" fill="none" xmlns="http://www.w3.org/2000/svg">
          <line x1="0.5" x2="0.5" y2="103.003" stroke="white" stroke-opacity="0.05"/>
          <line x1="0.5" y1="101.065" x2="0.5" y2="103.006" stroke="white"/>
          </svg>
        </div>
        <div className="content2 absolute lg:left-[30em] lg:top-48">
          <svg width="1" height="103" viewBox="0 0 1 103" fill="none" xmlns="http://www.w3.org/2000/svg">
          <line x1="0.5" x2="0.5" y2="103.003" stroke="white" stroke-opacity="0.05"/>
          <line x1="0.5" y1="101.065" x2="0.5" y2="103.006" stroke="white"/>
          </svg>
        </div>
      </div>
    <div className=" flex flex-wrap-reverse justify-center items-center">
      <div className="container-text">
          <h1 className="text-j lg:text-6xl text-[30px] py-5 w-full lg:w-[11em] text-white">Hi,I am <span className="text-[#1e6aec]">Aji Ramdani</span> Programmer And Graphic Designer</h1>
          <p className="lg:text-[15px] lg:w-[40em] text-white">
        Selamat datang di <span className="text-blue-500 font-semibold">portofolio Aji Ramdani</span>, tempat di mana teknologi dan kreativitas bersatu. Saya adalah programmer dan desainer grafis yang menghadirkan solusi inovatif dan desain yang memikat.
        {showFullText ? (
          <>
            Temukan karya-karya saya yang mencerminkan dedikasi dan visi dalam pengalaman digital yang luar biasa.
            <button onClick={toggleText} className="text-blue-500 font-semibold ml-2">Sembunyikan</button>
          </>
        ) : (
          <button onClick={toggleText} className="text-blue-500 font-semibold ml-2">Lihat Semua</button>
        )}
      </p>
          <div className="grup-button py-3 flex gap-5  items-center">
            <Link href='https://wa.me/6289508742700?text=Halo,%20saya%20ingin%20konsultasi' className="bg-white/10 text-white px-7 lg:px-10 text-center py-3">Contact Us</Link>
            <button key={size}  onClick={() => handleOpen(size)}>
              <div className="flex gap-3 items-center hover:transform hover text-white" typeof="button">Download CV 
                <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12.5H19M19 12.5L13 18.5M19 12.5L13 6.5" stroke="#0d42f0" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
            </button>

          </div>
      </div>
      <div className="container-image">
          <Image className="lg:w-[35em] rounded-lg" src={pp} alt="gambarAri"></Image>
      </div>
    </div>
    </div>
  )
}


