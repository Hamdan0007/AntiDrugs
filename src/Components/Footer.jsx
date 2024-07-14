import React from 'react'
import BackToTopButton from './BackToTop'
import { FaFacebookF, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa6'

const Footer = ({ChangeModal}) => {
  return (
   <footer className="bg-[#121113]">
  <div className="container md:px-10 px-6 pr-10 md:pr-auto py-12 mx-auto">
    <div className="flex md:flex-row flex-col gap-3 md:items-center justify-between">
      <div className="sm:col-span-1 md:w-1/5">
      <h1 className="max-w-lg text-xl font-semibold tracking-tight text-white xl:text-xl">About us</h1>
    <p className="py-2 text-white text-sm">Elementum diam morbi ullamcorper mauris id sed. Lorem dui non nullam velit suspendisse sed. Id volutpat sit euismod </p>

    
        
        
       
      </div>
      
      <div className='md:w-1/5'>
        <p className="font-semibold text-white">Contact us</p>
        <div className="flex flex-col items-start md:mt-5 mt-1 space-y-2">
          <a href="#" className="text-white transition-colors duration-300 hover:underline hover:text-blue-500">Email: admin@klicktalk.net</a>
          <a href="#" className="text-white transition-colors duration-300 hover:underline hover:text-blue-500">Phone: +81 6471 9686</a>
          
        </div>
      </div>
      <div className='md:w-1/5'>
        <p className="font-semibold text-white">Follow us</p>
        <div className='flex items-center py-10 gap-5'>
     <FaFacebookF color='#4B7FCD' size={20} />
     <FaYoutube color='red' size={20} />
     <FaLinkedin color='#4A71FB' size={20}/>
     <FaInstagram color='#ED017F' size={20}/>
    </div>
      </div>
      <BackToTopButton/>
    </div>
    <hr className="mb-5 mt-3 border-gray-200 dark:border-gray-700" />


<div className="flex flex-col items-center sm:flex-row sm:justify-between">
  <p className="text-sm text-gray-500">© Copyright 2021. All Rights Reserved.</p>
  <div className="flex mt-3 -mx-2 sm:mt-0">
    <a href="#" className="mx-2 text-sm text-gray-500 transition-colors duration-300 hover:text-gray-500 dark:hover:text-gray-300" aria-label="Reddit"> Teams </a>
    <a href="#" className="mx-2 text-sm text-gray-500 transition-colors duration-300 hover:text-gray-500 dark:hover:text-gray-300" aria-label="Reddit"> Privacy </a>
    <a href="#" className="mx-2 text-sm text-gray-500 transition-colors duration-300 hover:text-gray-500 dark:hover:text-gray-300" aria-label="Reddit"> Cookies </a>
  </div>
</div>

  </div>
</footer>


  )
}

export default Footer