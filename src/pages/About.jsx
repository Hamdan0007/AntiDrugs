import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import '../App'; // Import the CSS file

const About = () => {

  return (
      <>
      
      <Navbar/>
      <div>

      <div className='border bg-blue-600 text-white text-center p-6 justify-center items-center flex flex-col'>
      <div className="slim-line"></div>

        <h1 className='font-extrabold text-5xl p-3'>About Us</h1>
        <p className='p-3 w-[70%]'>Dedicated to combating drug addiction, our agency provides comprehensive prevention, treatment, and rehabilitation services to foster healthier, drug-free communities."</p>
       </div>





      </div>


      <Footer/>
      
      
      </>)
}

export default About