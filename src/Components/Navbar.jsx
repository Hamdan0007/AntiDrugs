import React from 'react'
import { Link } from 'react-router-dom';


const Navbar = () => {
  return (

    
    <header className="text-gray-600 bg-gray-00 body-font md:block hidden">
  <div className="container mx-auto flex flex-wrap px-5 py-2 flex-col md:flex-row items-center">
    <Link to="/" className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      <img src="/logo.png" className='w-24' />
    </Link>
    <link rel="stylesheet" href="" />
    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center justify-center space-x-4 text-md font-[500] text-black">
     
      <Link to="/">Home</Link>
      <Link to="/about">About Us</Link>
      <Link to="/gallery">Gallery</Link>
      <Link to="/contact">Contact us</Link>
      {/* <Link className="mr-5 hover:text-gray-900">More Page</Link> */}
      
    </nav>
    <Link to ='/donate'><button className="inline-flex items-center bg-[#353980] text-white border-0 py-2 px-5 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">Donate
      <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-4 h-4 ml-1" viewBox="0 0 24 24">
        <path d="M5 12h14M12 5l7 7-7 7" />
      </svg>
    </button>
    </Link>
  </div>
</header>


  )
}

export default Navbar