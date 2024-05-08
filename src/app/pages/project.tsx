"use client"; 
import "../styles/style.scss"
import { useState,useEffect } from "react";
import Programmer from "./programmer";
import Design from "./design";
import { motion } from "framer-motion";

export default function Projects () {
    // === function useState === //
    const [selectedButton, setSelectedButton] = useState<number | null>(null);
    const [showContent1, setShowContent1] = useState(false)
    const [showContent2, setShowContent2] = useState(false)

    const toggleContent1 = () => {
        setSelectedButton(1);
        setShowContent1(true);
        setShowContent2(false)
    }
    const toggleContent2 = () => {
        setSelectedButton(2);
        setShowContent1(false);
        setShowContent2(true)
    }
    
    useEffect(() => {
        setSelectedButton(1);
        setShowContent1(true);
        setShowContent2(false);
      }, []);

      
    return (
        <div className="container mx-auto lg:px-10 py-10 ">
            <div className="text-center">
                <h1 className="project text-5xl">Projects AriDev</h1>
                <p className="py-1 px-10">Collection of projects that have been created</p>
                <div className="grup-button py-5 flex justify-center gap-3">
                    <button
                    style={{ backgroundColor: selectedButton === 1 ? 'rgba(0, 102, 255, 0.217)' : selectedButton === 2 ? 'rgba(255, 255, 255, 0.1)' : undefined  }}
                    onClick={toggleContent1} className="bg-white/10 px-7 lg:px-10 py-3">Programmer</button>
                    <button
                     style={{ backgroundColor: selectedButton === 2 ? 'rgba(0, 102, 255, 0.217)' : selectedButton === 1 ? 'rgba(255, 255, 255, 0.1)' : undefined }}
                    onClick={toggleContent2} className="bg-blue-500/20 px-7 lg:px-10 py-3">Graphic Design</button>
                </div>
                <svg className="w-full py-3" viewBox="0 0 1301 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                <line y1="0.5" x2="640.028" y2="0.5" stroke="white" stroke-opacity="0.05"/>
                <line x1="149" y1="0.5" x2="158" y2="0.5" stroke="white"/>
                <line x1="1166" y1="0.5" x2="1175" y2="0.5" stroke="#0D9EF0"/>
                <line x1="660" y1="0.5" x2="1300.03" y2="0.5" stroke="white" stroke-opacity="0.05"/>
                </svg>
            </div>
            
            <div className="container py-3">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: showContent1 ? 1 : 0 }}
                transition={{ duration: 0.5 }}
                style={{ display: showContent1 ? 'block' : 'none' }}
            >
                 <Programmer />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: showContent2 ? 1 : 0 }}
        transition={{ duration: 0.5 }}
        style={{ display: showContent2 ? 'block' : 'none' }}
      >
        <Design />
      </motion.div>
            </div>
        </div>
    )
}