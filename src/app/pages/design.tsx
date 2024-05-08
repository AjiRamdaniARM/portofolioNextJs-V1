'use client'
import { useEffect, useState } from 'react';
import axios from 'axios';
import Image from 'next/image';
import "../styles/style.scss"

export default function Design () {
  const [data, setData] = useState<any[]>([]);

useEffect(() => {
 fetchData();
}, []);

const fetchData = async () => {
 try {
   const response = await axios.get('http://localhost:4000/api/data');
   setData(response.data);
 } catch (error) {
   console.error('Error fetching data:', error);
 }
};

return (
 <div className="containerImageD">
{data.length > 0 ? (
  data.map((item, index) => (
    <div key={index}>
      <div className='transform transition duration-500 hover:scale-105 hover:shadow-2xl'>
        <a href={`/data/${item.Link}`}>
          <Image
            width={1000}
            height={1000}
            className='py-3 rounded-2xl'
            src={`/data/${item.Link}`}
            alt="Picture of the author"
          />
          <span className="absolute inset-0 flex items-center justify-center text-white opacity-0 rounded-lg  hover:opacity-100 transition duration-300 bg-black bg-opacity-50">
            <p className="text-4xl font-bold">{item.judul}</p>
          </span>
        </a>
      </div>
    </div>
  ))
) : (
  <p className='px-10'>Data tidak tersedia</p>
)}

</div>

);
};