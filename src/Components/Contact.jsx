import React from 'react'

const Contact = () => {
  return (
    <section className="bg-white " id='contact'>
  <div className="container px-6 md:py-12 pt-20 mx-auto bg-white">
    <div className="lg:flex lg:items-center lg:-mx-6">
      <div className="lg:w-1/2 lg:mx-6 gap-2">
        <h1 className="text-2xl font-bold text-gray-800 capitalize  lg:text-3xl">
        Get in Touch <br /> With us
        </h1>
        <p className='text-black'>
        Have suggestions, ideas or want a grab a cup of coffee? Fill out the form and we will get back to as soon as possible.
        </p>
        <div className="mt-6 space-y-8 md:mt-8">
         
          <p className="flex items-start -mx-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 mx-2 text-white bg-[#3A306C] p-2 rounded-md " fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <span className="mx-2 text-gray-700 truncate w-72 ">(080) 6471 9686</span>
          </p>
          <p className="flex items-start -mx-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 mx-2 text-white bg-[#3A306C] p-2 rounded-md " fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <span className="mx-2 text-gray-700 truncate w-72 ">admin@klicktalk.net</span>
          </p>
          <p className="flex items-start -mx-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 mx-2 text-white bg-[#3A306C] p-2 rounded-md " fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span className="mx-2 text-gray-700 truncate w-72 ">
            Tokyo, Japan
            </span>
          </p>
        </div>
       
      </div>
      <div className="mt-8 lg:w-1/2 lg:mx-6">
        <div className="w-full px-8 py-10 mx-auto overflow-hidden bg-[#FBFAFE] rounded-lg lg:max-w-xl  ">
         
          <form className="mt-6">
            <div className="flex gap-2">
            <div>

              <label className="block mb-2 text-sm text-gray-600 ">Full Name</label>
              <input type="text" placeholder="John Doe" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:text-gray-300  focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
            </div>
            <div>

              <label className="block mb-2 text-sm text-gray-600 ">Full Name</label>
              <input type="text" placeholder="John Doe" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:text-gray-300  focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
            </div>
            </div>
            <div className="flex-1 mt-6">
              <label className="block mb-2 text-sm text-gray-600 ">Email address</label>
              <input type="email" placeholder="johndoe@example.com" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:text-gray-300  focus:border-blue-400  focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
            </div>
            <div className="flex-1 mt-6">
              <label className="block mb-2 text-sm text-gray-600 ">Subject</label>
              <input type="email" placeholder="johndoe@example.com" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:text-gray-300  focus:border-blue-400  focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
            </div>
            <div className="w-full mt-6">
              <label className="block mb-2 text-sm text-gray-600 ">Message</label>
              <textarea className="block w-full h-32 px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md md:h-48 dark:text-gray-300  focus:border-blue-400  focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Message" defaultValue={""} />
            </div>
            <button className=" px-6 py-3 mt-6 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-[#3A306C] rounded-md hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</section>

  )
}

export default Contact