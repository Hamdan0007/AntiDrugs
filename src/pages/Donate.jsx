import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import '../App'; // Import the CSS file




const Donate = () => {
    
  return (
<>


<Navbar/>
    

    <div className='w-full font-family! py-10'>

       <div className=' border text-white text-center p-16 justify-center items-center flex flex-col background-Donation '  > 
    
     
       <div className='bg-slate-950 w-full opacity-70'>
      

        <h1 className='font-extrabold text-5xl p-3'>Donation</h1>
        <p >Giving is not just about making a donation. It’s about making a difference."</p>
       </div>
       </div>


        <div className='flex justify-between items-center w-full pt-16 '>
            <div className='flex justify-center flex-col pl-7'>

              <h3 className='text-center font-bold text-4xl mb-6 text-green-700'>For Charities and Donations to DOST</h3>
<ul className=' space-y-3 text-lg' >
<li><strong className='text-green-700'>Bank:</strong> Habib Bank Limited</li>
<li><strong className='text-green-700'>Address:</strong>&nbsp;Sector B-1, Phase V Hayatabad Peshawar Branch</li>
<li><strong className='text-green-700'>Account Number: </strong>1113-00045819-01</li>
<li><strong className='text-green-700'>Title of account:</strong> DOST WELFARE FOUNDATION</li>
<li><strong className='text-green-700'>Swift Code: </strong>HABBPKKA</li>
<li><strong className='text-green-700'>IBAN Code:</strong>&nbsp;PK32HABB0011130004581901</li>
<li><strong className='text-green-700'>Branch Code:</strong>&nbsp;1113</li>
<li><strong className='text-green-700'>Telephone: </strong>+92-91-5823152</li>

</ul>
              </div>
            
        <div className=' mr-7 w-[40%] flex justify-center items-center'>      
             <img src="https://cdn5.vectorstock.com/i/1000x1000/40/44/donation-blue-modern-line-horizontal-banner-vector-20664044.jpg" alt="Donation" className='rounded-sm'  />

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