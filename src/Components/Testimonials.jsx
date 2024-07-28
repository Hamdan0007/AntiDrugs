import React, { useRef, useState } from 'react'
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';

import './testimonial.css';

import { Navigation } from 'swiper/modules';

const Testimonials = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [_, setInit] = useState();

  return (
    <section className="bg-[#045a0f]">
  <div className="container px-6 py-10 mx-auto">
    <h1 className="text-2xl font-semibold text-center capitalize lg:text-3xl text-white">
      What clients saying
    </h1>
    <div className="flex justify-center mx-auto mt-6">
      <span className="inline-block w-40 h-1 bg-blue-500 rounded-full" />
      <span className="inline-block w-3 h-1 mx-1 bg-blue-500 rounded-full" />
      <span className="inline-block w-1 h-1 bg-blue-500 rounded-full" />
    </div>
    <div className="flex items-start max-w-6xl mx-auto mt-16">
      <button ref={prevRef} title="left arrow" className="hidden p-2 transition-colors duration-300 border rounded-full rtl:-scale-x-100 border-gray-700 text-gray-200 lg:block hover:bg-gray-100">
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <Swiper 
      spaceBetween={50}
        slidesPerView={1}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
      modules={[Navigation]} 
      onInit={() => setInit(true)}
      className="mySwiper">
      
      <SwiperSlide>
        <p className="flex items-center text-center text-white lg:mx-8">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, quam. Odio voluptatem officiis
          eos illo! Pariatur, totam alias. Beatae accusamus earum quos obcaecati minima molestias. Possimus
          minima dolores itaque! Esse! Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea voluptates
          fugiat corrupti laudantium dolores reiciendis pariatur esse quod nihil quia cupiditate debitis
          quisquam nemo, accusamus animi explicabo? Architecto, unde laboriosam?
        </p>
        <div className="flex flex-col items-center justify-center mt-8">
          <img className="object-cover rounded-full w-14 h-14" src="https://images.unsplash.com/photo-1499470932971-a90681ce8530?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt />
          <div className="mt-4 text-center">
            <h1 className="font-semibold text-white">Mia Brown</h1>
            <span className="text-sm text-white ">Marketer</span>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <p className="flex items-center text-center text-white lg:mx-8">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, quam. Odio voluptatem officiis
          eos illo! Pariatur, totam alias. Beatae accusamus earum quos obcaecati minima molestias. Possimus
          minima dolores itaque! Esse! Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea voluptates
          fugiat corrupti laudantium dolores reiciendis pariatur esse quod nihil quia cupiditate debitis
          quisquam nemo, accusamus animi explicabo? Architecto, unde laboriosam?
        </p>
        <div className="flex flex-col items-center justify-center mt-8">
          <img className="object-cover rounded-full w-14 h-14" src="https://images.unsplash.com/photo-1499470932971-a90681ce8530?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt />
          <div className="mt-4 text-center">
            <h1 className="font-semibold text-white">Mia Brown</h1>
            <span className="text-sm text-white ">Marketer</span>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <p className="flex items-center text-center text-white lg:mx-8">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, quam. Odio voluptatem officiis
          eos illo! Pariatur, totam alias. Beatae accusamus earum quos obcaecati minima molestias. Possimus
          minima dolores itaque! Esse! Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea voluptates
          fugiat corrupti laudantium dolores reiciendis pariatur esse quod nihil quia cupiditate debitis
          quisquam nemo, accusamus animi explicabo? Architecto, unde laboriosam?
        </p>
        <div className="flex flex-col items-center justify-center mt-8">
          <img className="object-cover rounded-full w-14 h-14" src="https://images.unsplash.com/photo-1499470932971-a90681ce8530?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt />
          <div className="mt-4 text-center">
            <h1 className="font-semibold text-white">Mia hello</h1>
            <span className="text-sm text-white ">Marketer</span>
          </div>
        </div>
      </SwiperSlide>
      </Swiper>
     
      <button ref={nextRef} title="right arrow" className="hidden p-2 transition-colors duration-300 border rounded-full rtl:-scale-x-100 border-gray-700 text-gray-200 lg:block hover:bg-gray-100">
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  </div>
</section>
  )
}

export default Testimonials