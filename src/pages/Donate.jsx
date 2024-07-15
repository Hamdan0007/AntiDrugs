import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import '../App'; // Import the CSS file




const Donate = () => {
    
  return (
<>


<Navbar/>
    

    <div className='w-full'>

       <div className=' border bg-blue-600 text-white text-center p-11 justify-center items-center flex flex-col'>
       <div className="slim-line"></div>

        <h1 className='font-extrabold text-5xl p-3'>Donation</h1>
        <p >Giving is not just about making a donation. It’s about making a difference."</p>
       </div>


       <div className='flex flex-row justify-between pt-5   ' >
            
            <div className='flex justify-center flex-col pl-7'>

              <h3 className='text-center font-bold text-xl mb-6'>For Charities and Donations to DOST</h3>
<ul>
<li className='p-1'><em>&nbsp;</em><strong>Bank:</strong> Habib Bank Limited</li>
<li className='p-1'><strong>Address:</strong>&nbsp;Sector B-1, Phase V Hayatabad Peshawar Branch</li>
<li className='p-1'><strong>Account Number: </strong>1113-00045819-01</li>
<li className='p-1'><strong>Title of account:</strong> DOST WELFARE FOUNDATION</li>
<li className='p-1'><strong>Swift Code: </strong>HABBPKKA</li>
<li className='p-1'><strong>IBAN Code:</strong>&nbsp;PK32HABB0011130004581901</li>
<li className='p-1'><strong>Branch Code:</strong>&nbsp;1113</li>
<li className='p-1'><strong>Telephone: </strong>+92-91-5823152</li>

</ul>
              </div>
            
        <div className=' border border-gray-500 h-[400px] mr-7 w-[40%]'>      
             <img src="" alt="Donation" />

            </div>

       </div>



    </div>
<div className='pt-3'>

  <Footer/>

</div>

</>
  
  
    )
}

export default Donate