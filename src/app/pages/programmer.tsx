import { useEffect, useState } from 'react';
import axios from 'axios';
import "../styles/style.scss"

export default function Projects () {
const [repositories, setRepositories] = useState<any[]>([]);
const [currentPage, setCurrentPage] = useState(1);
const [perPage] = useState(10);
  const username = '<USERNAME>'; 

  useEffect(() => {
    const fetchRepositories = async () => {
      try {
        const response = await axios.get(`https://api.github.com/users/AjiRamdaniARM/repos?page=${currentPage}&per_page=${perPage}`);
        setRepositories(response.data);
      } catch (error) {
        console.error('Error fetching repositories:', error);
      }
    };

    fetchRepositories();
  }, [currentPage, perPage, username]);

    return (
        <div className="container mx-auto lg:px-10 ">
<div className="relative overflow-x-auto">
    <div className="flex flex-row mx-auto py-2">
        <button type="button" 
         onClick={() => setCurrentPage(prevPage => Math.max(prevPage - 1, 1))}
         disabled={currentPage === 1}
        className="bg-gray-800 text-white rounded-l-md border-r border-gray-100 py-2 hover:bg-blue-700 hover:text-white px-3">
        <div className="flex flex-row align-middle">
            <svg className="w-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z" clip-rule="evenodd"></path>
            </svg>
            <p className="ml-2">Prev</p>
        </div>
        </button>
        <button type="button"  
        onClick={() => setCurrentPage(prevPage => prevPage + 1)}
        className="bg-gray-800 text-white rounded-r-md py-2 border-l border-gray-200 hover:bg-blue-700 hover:text-white px-3">
        <div className="flex flex-row align-middle">
            <span className="mr-2">Next</span>
            <svg className="w-5 ml-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path>
            </svg>
        </div>
        </button>
  </div>


    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="px-6 py-3">
                    Nama Project
                </th>
                <th scope="col" className="px-6 py-3">
                    Language
                </th>
                <th scope="col" className="px-6 py-3">
                     github
                </th>
                <th scope="col" className="px-6 py-3">
                created_at
                </th>
            </tr>
        </thead>
        <tbody>
        {repositories.map(repo => (
            <tr key={repo.id} className=" border-b">
                <th scope="row"  className="px-6 py-4 font-medium whitespace-nowrap text-white">
                {repo.name}
                </th>
                <td className="px-6 py-4">
                {repo.language}
                </td>
                <td className="px-6 py-4">
                <a className='text-blue-500 hover:font-semibold' href={repo.html_url}>{repo.full_name}</a>
                </td>
                <td className="px-6 py-4">
                    {repo.created_at}
                </td>
            </tr>
            ))}
        </tbody>
    </table>
</div>

        </div>
    )
}