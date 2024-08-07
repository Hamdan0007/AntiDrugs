import React from 'react'
import Navbar from '../Components/Navbar'
import '../App'; // Import the CSS file
import Footer from '../Components/Footer';
import MobileNavbar from '../Components/MobileNavbar';

const Contact = () => {
  return (
    <>
      
    <Navbar/>
    <MobileNavbar/>

    
    <div className='font-family!'>

    <div className='border background-ContactUs text-white text-center justify-center items-center flex flex-col'>
    <div className='bg-[#353980] w-full opacity-70 p-20 '>
      
      <h1 className='font-extrabold text-5xl p-3'>Contact Us</h1>
      <p className='p-3 md-w-[70%] text-center'>Reach out to us for support, resources, or more information about our drug addiction prevention and treatment services."</p>
     </div>


     </div>

<div>

<section className="text-gray-600 body-font relative">
  <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
    <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
      <iframe width="100%" height="100%" className="absolute inset-0" style={{filter: 'yellowscale(0.5) contrast(1.2) opacity(0.4)'}}  title="map"  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d106390.41357584005!2d71.46753260000001!3d33.56115905!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38d8ef13ac5af415%3A0x864572b0758eb834!2sKohat%2C%20Khyber%20Pakhtunkhwa!5e0!3m2!1sen!2s!4v1722961788868!5m2!1sen!2s" />
      <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
        <div className="lg:w-1/2 px-6">
          <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">ADDRESS</h2>
          <p className="mt-1">Gulberg Colony, House No#3, University Road, Near Malak CNG Kohat City.</p>
        </div>
        <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
          <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">EMAIL</h2>
          <a className="text-indigo-500 leading-relaxed">zindagiwelfareorg.pk@gmail.com</a>
          <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">PHONE</h2>
          <p className="leading-relaxed">03337000686 /03100010086 /
03229155072</p>
        </div>
      </div>
    </div>
    <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
      <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">Feedback</h2>
      <p className="leading-relaxed mb-5 text-gray-600">ZINDAGI Welfare Organization (ZWO) empowers marginalized groups in Pakistan through comprehensive, rights-based services and community support.</p>
      <div className="relative mb-4">
        <label htmlFor="name" className="leading-7 text-sm text-gray-600">Name</label>
        <input type="text" id="name" name="name" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
      </div>
      <div className="relative mb-4">
        <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
        <input type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
      </div>
      <div className="relative mb-4">
        <label htmlFor="message" className="leading-7 text-sm text-gray-600">Message</label>
        <textarea id="message" name="message" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out" defaultValue={""} />
      </div>
      <button className="text-white bg-[#353980] border-0 py-2 px-6 focus:outline-none hover:bg-green-800 rounded text-lg">Button</button>
     </div>
  </div>
</section>


</div>


    </div>


    <Footer/>
    
    
    </>

  )
}

export default Contact