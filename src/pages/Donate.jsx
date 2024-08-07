import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import '../App'; // Import the CSS file




const Donate = () => {
    
  return (
<>


<Navbar/>
    

    <div className='w-full font-family!'>

       <div className=' border text-white text-center justify-center items-center flex flex-col background-Donation '  > 
    
       <div className='bg-green-950 w-full opacity-70 p-20 '>
      

        <h1 className='font-extrabold text-5xl p-3'>Donation</h1>
        <p >Giving is not just about making a donation. It’s about making a difference."</p>
       </div>
       </div>


        <div className='flex justify-between flex-col md:flex-row items-center w-full pt-16 '>
            <div className='flex justify-center flex-col pl-7'>

              <h3 className='font-bold text-4xl mb-6 text-green-700'>For Donations to Zindagi Welfare Organization</h3>
<ul className=' space-y-3 text-lg' >
<li><strong className='text-green-700'>Bank:</strong>ABL Allied Bank limited</li>
<li><strong className='text-green-700'>Branch Address: </strong>SHOP # T-488, MAIN BAZAR KOHAT.</li>

<li><strong className='text-green-700'>Account Number: </strong>0010065299830011</li>
<li><strong className='text-green-700'>Tittle of Account:</strong>Farid Ullah</li>
<li><strong className='text-green-700'>Branch Code:</strong> 185</li>
<li><strong className='text-green-700'>ABL Branch Phone number:  </strong> 0922-518709</li>

</ul>
              </div>
            
        <div className=' mr-7 w-[40%] flex justify-center items-center pt-10 md:pt-0'>      
             <img src="/Welfare-Tree.jpg" alt="Donation" className='rounded-sm'  />

            </div>
       </div>

    </div>
<div className='py-10'>

  <Footer/>

</div>

</>
  
    )
}

export default Donate