'use client'
import React from 'react';
import { useState } from 'react';

const Tools = () => {
    const itemsPerPage = 8; // Number of items to display per page
    const [currentPage, setCurrentPage] = useState(1);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

 
     const handlePageChange = (pageNumber: number) => { // Specify the type for pageNumber
        setCurrentPage(pageNumber);
    };

    const html = "https://clipartcraft.com/images/html5-logo-circle.png"


    
    const itemR = [
        // page 1
        {
            'image' : "https://clipartcraft.com/images/html5-logo-circle.png",
            'judul' : "Html5 based",
            'desk' : "skills that I am good at and applications - applications that I often use in making work or projects"
        },
        {
            'image' : "https://1000logos.net/wp-content/uploads/2020/09/CSS-Logo.png",
            'judul' : "Css based",
            'desk' : "skills that I am good at and applications - applications that I often use in making work or projects"
        },
        {
            'image' : "https://freepngdesign.com/content/uploads/images/javascript-logo-7539.png",
            'judul' : "JavaScript Based",
            'desk' : "skills that I am good at and applications - applications that I often use in making work or projects"
        },
        {
            'image' : "https://www.pngrepo.com/png/374146/512/typescript-official.png",
            'judul' : "TypeScript based",
            'desk' : "skills that I am good at and applications - applications that I often use in making work or projects"
        },
        {
            'image' : "https://gencer.gallerycdn.vsassets.io/extensions/gencer/html-slim-scss-css-class-completion/1.7.8/1606736091519/Microsoft.VisualStudio.Services.Icons.Default",
            'judul' : "Scss based",
            'desk' : "skills that I am good at and applications - applications that I often use in making work or projects"
        },
        {
            'image' : "https://pngimg.com/uploads/php/php_PNG26.png",
            'judul' : "PHP based",
            'desk' : "skills that I am good at and applications - applications that I often use in making work or projects"
        },
        {
            'image' : "https://www.scottbrady91.com/img/logos/dart.png",
            'judul' : "Dart based",
            'desk' : "skills that I am good at and applications - applications that I often use in making work or projects"
        },
        {
            'image' : "https://kotlinlang.org/docs/images/kotlin-logo.png",
            'judul' : "Kotlin based",
            'desk' : "skills that I am good at and applications - applications that I often use in making work or projects"
        },
        // page 2
        {
            'image' : "https://logospng.org/download/laravel/logo-laravel-1024.png",
            'judul' : "Laravel based",
            'desk' : "skills that I am good at and applications - applications that I often use in making work or projects"
        },
        {
            'image' : "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/1024px-Tailwind_CSS_Logo.svg.png?20230715030042",
            'judul' : "Tailwind Css based",
            'desk' : "skills that I am good at and applications - applications that I often use in making work or projects"
        },
        {
            'image' : "https://ww1.freelogovectors.net/wp-content/uploads/2022/10/bootstrap-logo-freelogovectors.net_.png?lossy=1&ssl=1",
            'judul' : "Bootsrap based",
            'desk' : "skills that I am good at and applications - applications that I often use in making work or projects"
        },
        {
            'image' : "https://seeklogo.com/images/B/bulma-logo-45B5145BF4-seeklogo.com.png",
            'judul' : "Bulma based",
            'desk' : "skills that I am good at and applications - applications that I often use in making work or projects"
        },
        {
            'image' : "https://icon-library.com/images/react-icon/react-icon-0.jpg",
            'judul' : "React Js based",
            'desk' : "skills that I am good at and applications - applications that I often use in making work or projects"
        },
        {
            'image' : "https://yaprojects.netlify.app/imgs/nextJSLogo.png",
            'judul' : "Next Js based",
            'desk' : "skills that I am good at and applications - applications that I often use in making work or projects"
        },
        {
            'image' : "https://archive.org/download/flutter-logo/flutter-logo.png",
            'judul' : "Flutter based",
            'desk' : "skills that I am good at and applications - applications that I often use in making work or projects"
        },
        {
            'image' : "https://pngimg.com/uploads/mysql/mysql_PNG6.png",
            'judul' : "Mysql based",
            'desk' : "skills that I am good at and applications - applications that I often use in making work or projects"
        },
         // page 3
         {
            'image' : "https://raw.githubusercontent.com/dhanishgajjar/vscode-icons/master/png/default_dark.png",
            'judul' : "Visual Studio Code based",
            'desk' : "skills that I am good at and applications - applications that I often use in making work or projects"
        },
        {
            'image' : "https://2.bp.blogspot.com/-tzm1twY_ENM/XlCRuI0ZkRI/AAAAAAAAOso/BmNOUANXWxwc5vwslNw3WpjrDlgs9PuwQCLcBGAsYHQ/s1600/pasted%2Bimage%2B0.png",
            'judul' : "Android Studio  based",
            'desk' : "skills that I am good at and applications - applications that I often use in making work or projects"
        },
        {
            'image' : "https://blog.scottlogic.com/smangan/assets/postman.png",
            'judul' : "Postman based",
            'desk' : "skills that I am good at and applications - applications that I often use in making work or projects"
        },
        {
            'image' : "https://pnghq.com/wp-content/uploads/xampp-logo-png-transparent-57294-300x300.png",
            'judul' : "Xampp based",
            'desk' : "skills that I am good at and applications - applications that I often use in making work or projects"
        },
        {
            'image' : "https://2.bp.blogspot.com/-KVFNcyNJpmc/XIe-Sqa674I/AAAAAAAAIuk/VRK5WWydfD4yjMq_AkU6B2h3WAROEvOMgCK4BGAYYCw/s1600/logo%2Bfigma%2Bicon.png",
            'judul' : "Figma based",
            'desk' : "skills that I am good at and applications - applications that I often use in making work or projects"
        },
        {
            'image' : "https://cdn.freelogovectors.net/wp-content/uploads/2020/07/Adobe-xd-logo-300x300.png",
            'judul' : "Adobe XD based",
            'desk' : "skills that I am good at and applications - applications that I often use in making work or projects"
        },
        {
            'image' : "https://logosmarcas.net/wp-content/uploads/2020/11/Adobe-Photoshop-Logo-650x366.png",
            'judul' : "Adobe Photoshop based",
            'desk' : "skills that I am good at and applications - applications that I often use in making work or projects"
        },
        {
            'image' : "https://pnghq.com/wp-content/uploads/illustrator-logo-and-symbol-2933-1536x960.png",
            'judul' : "Adobe Illustrator based",
            'desk' : "skills that I am good at and applications - applications that I often use in making work or projects"
        },
     
     
       
    ]
  return (
    <section className='container py-20 bottom-7 relative lg:px-10'>
    <div className="  w-full h-auto left-0 right-0">
        <div className="mx-auto"> 
            <h1 className='lg:text-[60px] text-4xl text-center text-white  lg:leading-[55px] tracking-tight font-bold py-3'>Programming <span className='text-[##FF9B58] bg-gradient-to-r from-[#FF9B58] to-[#fc8231] bg-clip-text text-transparent'>Language</span> & Tools <span className='text-[##FF9B58] bg-gradient-to-r from-[#d901ff] to-[#a600ff] bg-clip-text text-transparent'>Sofware</span></h1>
            <p className='text-center text-[#A1A1AA] py-3 font-semibold'>Using NextUI in a profit-making product, as a freelancer, or for fun projects? Your contributions will help to make NextUI better.</p>
        </div>
        <div className="mx-auto block relative -bottom-5 left-0 right-0 text-center">
            <div className="grid grid-cols-1 md:grid-cols-4  gap-4">
            {itemR.slice(startIndex, endIndex).map((item, index) => (
                     <div key={index}>
                    <div className="container bg-black hover:border-[#DE2FF7] border-gray-900 border bg-opacity-50 backdrop-blur rounded-lg w-68 hover:scale-105 transition duration-100  flex flex-col h-58 items-start justify-start gap-1 p-5">
                        <div className="head w-full h-auto ">
                           <div className="py-1 px-2 flex justify-start items-center gap-5">
                            <img src={item.image} className='w-10' alt="html" />
                            <h2 className='font-bold inter text-1xl text-white'>{item.judul}</h2>
                           </div>
                        </div>
                        <div className="body  w-full h-auto px-2 ">
                         <p className='text-start text-gray-500'>{item.desk}</p>
                        </div>
                    </div>
                </div>
                ))}
            </div>
        </div>
        <div className="mt-4 relative mx-auto -bottom-10 flex  justify-center">
                        {Array.from({ length: Math.ceil(itemR.length / itemsPerPage) }, (_, i) => (
                            <button
                                key={i}
                                onClick={() => handlePageChange(i + 1)}
                                className={`mx-2 py-2 px-4 rounded transition text-white ${
                                    currentPage === i + 1 ? 'bg-gray-900 text-white border border-[#fc8231] shadow-md scale-105' : 'bg-gray-900'
                                }`}
                            >
                                {i + 1}
                            </button>
                        ))}
                    </div>
    </div>
    </section>
  );
}

export default Tools;
