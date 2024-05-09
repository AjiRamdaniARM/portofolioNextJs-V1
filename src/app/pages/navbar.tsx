'use client'
import "../styles/style.scss";
import Image from "next/image";
import Logo from "../image/logo.png";
import Link from "next/link";
import React from "react";
import { useState } from "react";
import { usePathname } from "next/navigation";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, RadioGroup, Radio} from "@nextui-org/react";

export default function Navbar() {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();
  const [modalPlacement, setModalPlacement] = React.useState("auto");
  const [isBuka, setIsOpen] = useState(false);
  const currentPath = usePathname();
  const navLink = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Google Play",
      path: "https://play.google.com/store/apps/dev?id=7566467722363539891",
    },
    {
      name: "Freelance",
      path: "https://arideveloper2004.wordpress.com/",
    }
  ];

  const isActive = (path:any) => {
    return () => {
      currentPath === path;
      setIsOpen(!isOpen);
    }
     
  };

 
  return (

    <nav className="flex lg:justify-around justify-center py-10 mx-auto items-center ">
         <Modal 
        isOpen={isOpen} 
        placement={'top'}
        backdrop={'blur'}
        onOpenChange={onOpenChange} 
      >
        <ModalContent className="bg-black">
          {(onClose) => (
            <>
              <ModalHeader className="flex  gap-1 justify-center items-center text-center font-bold ">
              <Image src={Logo} width={40} alt="logo-UX"></Image>
                MINI NAVBAR</ModalHeader>
              <ModalBody>
              {navLink.map(({ name,path}) => (
                <div key={name}>
                  <a href={path} className="flex items-center p-3 text-base font-bold rounded-lg bg-gray-800 hover:bg-gray-800 group hover:shadow text-white">
                 
                  <span className="flex-1 ms-3 whitespace-nowrap">{name}</span>
                  <span className="inline-flex items-center justify-center px-2 py-0.5 ms-3 text-xs font-medium text-gray-500 bg-gray-200 rounded dark:bg-gray-700 dark:text-gray-400">New</span>
                  </a>
                </div>
              ))}
                  
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
      <div className="logo flex justify-center items-center gap-2">
       <Image src={Logo} width={40} alt="logo-UX"></Image>
        <div className="text-white font-bold">Portofolio</div>
        <button className="text-xs leading-5 text-white font-semibold bg-blue-400/50 rounded-full py-1 px-3 flex items-center space-x-2 hover:bg-slate-400/20 dark:highlight-white/5" id="headlessui-menu-button-:Racr6:" type="button" aria-haspopup="true" aria-expanded="false" data-headlessui-state="">v1.0.0<svg width="6" height="3" className="ml-2 overflow-visible" aria-hidden="true"><path d="M0 0L3 3L6 0" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path></svg></button>
        &nbsp;

        <button onClick={onOpen} data-modal-target="select-modal" data-modal-toggle="select-modal" type="button" className="md:hidden ml-3  text-gray-400 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300 rounded-lg inline-flex items-center justify-center" aria-controls="mobile-menu-2" aria-expanded="false">
        <span className="sr-only">Open main menu</span>
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
        <svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        </button>


      </div>
      <div>

      <div className="hidden md:block w-full md:w-auto" id="mobile-menu">
        <ul className="text-white font-normal lg:flex justify-center flex-col md:flex-row flex md:space-x-8 mt-4 md:mt-0 md:text-sm md:font-medium items-center gap-10 ">

     {navLink.map(({ name,path }) => (
      <Link 
      key={name}
      href={path}
      aria-label={name}
      className={isActive(path) ? 'active:underline active:underline-offset-4  active:decoration-solid active:decoration-sky-500 active:font-bold' : ''  }
      >{name}</Link>
      
     ))}
        </ul>
        </div>
      </div>
    </nav>
    
  ) 
}
