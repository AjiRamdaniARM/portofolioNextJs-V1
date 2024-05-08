"use client";
import React, { useState } from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, modal } from '@nextui-org/react';
 
 

export default function Youtube() {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();
  const [size, setSize] = React.useState('full')
  const [modalContent, setModalContent] = useState('');



  
  const handleOpen = (size: string, content:string) => {
    setModalContent(content);
    setSize(size)
    onOpen();
  }

  return (
    
    <section className='container py-20 bottom-7 relative lg:px-10'>
       <Modal 
        size={"full"} 
        backdrop="opaque" 
        isOpen={isOpen} 
        onOpenChange={onOpenChange}
        classNames=
        {{
          backdrop: "bg-gradient-to-t bg-black from-zinc-900 to-zinc-900/10 backdrop-opacity-20"
        }}
      >
        <ModalContent className="bg-black ">
          {(onClose) => (
            <>
              <ModalBody >
              {modalContent === 'button1' && (
                  <iframe className="w-full h-full" src="https://www.youtube.com/embed/Yy1AM4IdCfo?si=l9L5rGW2qaiDguwR" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
                )}
                  {modalContent === 'button2' && (
               <iframe className="w-full h-full" src="https://www.youtube.com/embed/U3bK4tOXVCo?si=rv1U6UvKHs0x8Qj6" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
                )}
                {modalContent === 'button3' && (
                 <iframe className="w-full h-full" src="https://www.youtube.com/embed/uQTtJaOcjm4?si=TAUzr2q32Z4qZwyu" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
                )}
              {/*  */}
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
     <div className="  w-full h-auto left-0 right-0">
     <div className="mx-auto"> 
            <h1 className='lg:text-[60px] text-4xl text-center  lg:leading-[55px] tracking-tight font-bold py-3'>List content <span className='text-[##ff5858] bg-gradient-to-r from-[#ff5858] to-[#fc3131] bg-clip-text text-transparent'>Youtube</span>  for tutorial <span className='text-[##5eff58] bg-gradient-to-r from-[#05ff01] to-[#00ff11] bg-clip-text text-transparent'>Coding</span></h1>
            <p className='text-center py-3'>don`t just watch it, guys, you have to like and subscribe too so that I am excited to upload the content.</p>
        </div>
        <div className="mx-auto block relative -bottom-5 left-0 right-0 text-center">
        <div className="grid grid-cols-1 md:grid-cols-3 md:gap-4 lg:gap-0 gap-4">
          <div  className='hover:scale-105  hover:border hover:border-red-500 max-w-sm mx-auto relative shadow-md transition rounded-lg cursor-pointer'>
              <div className="relative w-full mx-auto ">
                          <img
                      className=" w-full object-cover object-center"
                      src="https://i3.ytimg.com/vi/Yy1AM4IdCfo/maxresdefault.jpg"
                      alt="nature image"
                    />
                      <div className="absolute  inset-0 flex items-center justify-center">
                      <button onClick={() => handleOpen(size,'button1')}>
                        <div className="bg-black/90 p-10 rounded-full">
                          <div >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z" />
                            </svg>
                          </div>
                        </div>
                        </button>
                      </div>
              </div>
            </div>
          <div  className='hover:scale-105  hover:border hover:border-red-500 max-w-sm mx-auto relative shadow-md transition rounded-lg cursor-pointer'>
              <div className="relative w-full mx-auto ">
                          <img
                      className=" w-full   object-cover object-center"
                      src="https://i3.ytimg.com/vi/U3bK4tOXVCo/maxresdefault.jpg"
                      alt="nature image"
                    />
                      <div className="absolute  inset-0 flex items-center justify-center">
                      <button onClick={() => handleOpen(size,'button2')}>
                        <div className="bg-black/90 p-10 rounded-full">
                          <div >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z" />
                            </svg>
                          </div>
                        </div>
                        </button>
                      </div>
              </div>
            </div>
          <div  className='hover:scale-105  hover:border hover:border-red-500 max-w-sm mx-auto relative shadow-md transition rounded-lg cursor-pointer'>
              <div className="relative w-full mx-auto ">
                          <img
                      className=" w-full   object-cover object-center"
                      src="https://i3.ytimg.com/vi/uQTtJaOcjm4/maxresdefault.jpg"
                      alt="nature image"
                    />
                      <div className="absolute  inset-0 flex items-center justify-center">
                      <button onClick={() => handleOpen(size,'button3')}>
                        <div className="bg-black/90 p-10 rounded-full">
                          <div >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z" />
                            </svg>
                          </div>
                        </div>
                        </button>
                      </div>
              </div>
            </div>
          </div>
        </div>
     </div>
    </section>
  );
}
