import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import '../App'; // Import the CSS file

const Gallery = () => {
  
  
  const images = [
    'https://dostfoundation.org/wp-content/uploads/2022/09/2-3.jpg',
    'https://dostfoundation.org/wp-content/uploads/2022/09/3-2.jpg',
    'https://dostfoundation.org/wp-content/uploads/2022/09/4-2.jpg',
    'https://dostfoundation.org/wp-content/uploads/2022/09/5-2.jpg',
    'https://dostfoundation.org/wp-content/uploads/2022/09/1-2.jpg',
    'https://dostfoundation.org/wp-content/uploads/2022/09/5-3.jpg'
  ];
  
  
  
  return (
    <>
      
    <Navbar/>
    
    <div className='font-family!'>

    <div className='border bg-green-600 text-white text-center p-6 justify-center items-center flex flex-col'>
    <div className="slim-line bg-white h-4 rounded-lg flex justify-center items-center">
    <div className="slim-line bg-green-600 h-4 rounded-lg">
      </div>
    
      </div>

      <h1 className='font-extrabold text-5xl p-3'>Gallery</h1>
      <p className='p-3 md-w-[70%]'>Our gallery showcases impactful images highlighting our efforts and achievements in combating drug addiction.</p>
     </div>


     <div className="container mx-auto py-8 flex justify-center">
      <div className="grid grid-cols-1 w-[80%]  md:grid-cols-2 lg:grid-cols-3 gap-4 ">
        {images.map((src, index) => (
          <div key={index} className="relative overflow-hidden">
            <a href={src} target="_blank" rel="noopener noreferrer">
              <img
                src={src}
                alt={`Gallery Image ${index + 1}`}
                className="w-full h-auto object-cover transition-transform duration-300 ease-in-out transform hover:scale-105"
              />
            </a>
          </div>
        ))}
      </div>
    </div>
    </div>


    <Footer/>
    
    
    </>
    )
    
}

export default Gallery