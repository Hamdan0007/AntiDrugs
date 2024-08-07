import React from 'react'

const StripRating = () => {
  return (
    <div className="text-gray-100  body-font h-200 " >
    
  <div className="container bg-[#353980] md:rounded-md md:-mt-20 md:w-4/5 px-5 py-12 mx-auto">
    <div className="grid grid-cols-3 -m-4 text-center divide-x-2">
      {/* <div className="p-4 sm:w-1/4 w-1/2"  data-aos-easing="linear"
     data-aos-duration="500" data-aos="flip-down">
     
        <h2 className="title-font font-bold sm:text-4xl text-3xl text-white ">20</h2>
        <p className="leading-relaxed">Years of Services</p>
      </div> */}
      <div className="p-4 w-full"  data-aos-easing="linear"
     data-aos-duration="1000" data-aos="flip-down">
      
        <h2 className="title-font font-bold sm:text-4xl text-3xl text-white ">20+</h2>
        <p className="leading-relaxed">No of Employees</p>
      </div>
      <div className="p-4 w-full"  data-aos-easing="linear"
     data-aos-duration="500" data-aos="flip-down">
      
        <h2 className="title-font font-bold sm:text-4xl text-3xl text-white ">48<span>0+</span></h2>
        <p className="leading-relaxed">VCT Services</p>
      </div>
      <div className="p-4 w-full"  data-aos-easing="linear"
     data-aos-duration="1000" data-aos="flip-down">
   
        <h2 className="title-font font-bold sm:text-4xl text-3xl text-white ">600+</h2>
        <p className="leading-relaxed">Drugs Addict Treated</p>
      </div>
    </div>
  </div>
</div>
     
     
      
  )
}

export default StripRating