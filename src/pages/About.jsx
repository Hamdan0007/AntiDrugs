import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import '../App'; // Import the CSS file
import StripRating from '../Components/StripRating';


const About = () => {

  return (
      <>
      
      <Navbar/>
      
      <div className='body-font'>

      <div className='border background-AboutUs text-white text-center py-16 justify-center items-center flex flex-col'>
     

     
     <h1 className='font-extrabold text-5xl p-3'>About Us</h1>
        <p className='p-3 md-w-[70%] text-center'>Our agency is committed to fighting drug addiction with prevention, treatment, and rehabilitation services, promoting healthier, drug-free communities.</p>
       
      </div>



       <div className=" py-12 flex justify-center items-center ">
      
         
            <section className="container mx-auto text-justify">
             <div className='flex'>
           
           <div className='w-[50%]'>
           <p>
                The AntiDrug Agency is a charitable, not-for-profit organization established to provide services to the most marginalized and vulnerable groups in society, including drug users, persons at risk of or infected by HIV/AIDS, prison inmates, juvenile offenders, minor children in detention with female prisoners, street children, women and children in crisis, refugees, victims of war and disasters. All these groups are mostly poor and lack the resources to live normal lives. Poverty reduces them to a state of marginalization and deprivation in all those conditions which contribute to the quality of human life e.g. health, education, justice, safety, security, housing, employment, and credit.
                The AntiDrug Agency reaches out to these unfortunate, miserable, and stigmatized individuals living in difficult and inhuman conditions, through a process of awareness, primary prevention, rehabilitation, and social development, and ensures their well-being and recovery. The Agency's services are Rights-based and Needs-based and include a comprehensive range of activities that cater to the physical, psychological, social, spiritual, and financial needs of clients and their families. The Agency provides quality services through its large service delivery network and comprehensive awareness programs extending all over the country. The Agency’s programs are intended to stimulate and facilitate positive change, with a significant impact and long-lasting effects. The Agency's strategies are aimed at individuals, families, and communities in a spirit of self-help, community support, and participation.
             </p>
            </div>
           
             <div className="w-full md:w-[50%] flex justify-center px-2">
          <img src='https://newportbeachrecoverycenter.com/wp-content/uploads/2020/06/nbrc-bk-1-1024x598.jpg' className='rounded-sm'   alt="Inspiration Image"
          
          />
        </div>

             </div>

           <div className='flex py-16'>
          
              
            <div className="w-full md:w-[50%] flex justify-center">
              <img
                className="rounded-sm"
                src="https://dostfoundation.org/wp-content/uploads/2022/09/WhatsApp-Image-2022-09-16-at-6.14.02-PM.jpeg"
                alt="AntiDrug Agency Image 2"
              />
            </div>

            <div className='w-[50%] px-2'>
            <p >
                At the time of the Agency’s establishment, drug abuse problems were increasing progressively due to the easy availability of cheap drugs smuggled across borders. A combination of geo-political, social, and economic factors contributed to the escalation of drug-related issues, crime, social disorder, injustice, poverty, and human rights abuses. A shift in the traditional modes of drug use from inhaling and smoking to injecting has added to the risk of HIV/AIDS, STIs, Hepatitis B/C among drug users and other vulnerable groups. Since there were hardly any treatment facilities in existence to cater to the affected population, the founding members were motivated to set up the Agency’s drug addiction treatment programs. The pioneering role of the Agency is now recognized nationally as well as internationally.
                The scope of our services comprises primary prevention, early intervention, treatment, rehabilitation, reintegration, aftercare, and follow-up. These services are provided in different locations and settings such as streets, prisons, homes, refugee camps, mobile camps, drop-in centers, out-patient, and residential facilities.
              
             </p>
            </div>
            
           </div>
            
            </section>
          
      
       </div>


  <section
      className="bg-green-700"
    >
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <div className="w-full h-auto md:w-2/5 flex justify-center">
          <img src='inspire.jpg'   alt="Inspiration Image" />
        </div>
        
        <div className="w-full md:w-3/5 text-white p-4">
          <h2 className="text-3xl mb-4 border-b border-white pb-2">AntiDrug Agency Inspiration</h2>
          <div className="space-y-4">
            <p className="text-justify">Dost Mohammad Khanzada (07 MARCH 1907 TO 03 AUGUST 1956)</p>
            <p className="text-justify">BSc. Engineering, University of Glasgow, Scotland.</p>
            <p className="text-justify">I was 15 years old and studying at the Convent of Jesus and Mary, Murree, when my father Dost Mohammad Khanzada said to me “I want you to be a missionary doctor. I’ll build you a hospital, support you financially and buy you a car, so that you can travel to different communities and provide services to the sick and needy.” I understood at that time that missionary work meant working with lepers who were the most hopeless and ostracized sections of society.</p>
            <p className="text-justify">In December 1954 I left the Convent after appearing in the Senior Cambridge examination, carrying my father’s dream with me. However, I was shattered when my father passed away in August 1956, even before my admission in medical college. However, his dream lived on and was turned into reality with the creation in 1992 of Dost Welfare Foundation, which was named after my father.</p>
            <p className="text-right">Dr. Parveen Azam Khan</p>
          </div>
        </div>
      </div>
    </section>

    <section
      className="relative flex justify-center items-center py-8 px-4"
    >
      <div className="absolute top-0 left-0 w-full h-full bg-transparent"></div>
      <div className="container mx-auto">
        <div className="flex flex-col items-center text-center bg-white p-8 rounded-lg">
          <h3 className="text-lg font-semibold mb-2 text-green-700">Helping Others Find Recovery</h3>
          <h2 className="text-2xl font-bold mb-4 text-green-700">ORGANIZATION MISSION</h2>
          <p className="mb-6">
            Newport Beach Recovery Center is designed to help individuals who suffer from alcohol and/or drug addiction obtain sobriety and recovery. We are dedicated to helping men and women live sober and healthy lives. We want to assist our clients in a course correction for their life that will refresh and renew their future. We strive to replace old behaviors with positive reframing to include an action plan for recovery. We incorporate a value-based life philosophy that becomes the basis for an attitude of action leading to a higher quality of life. We provide a supportive environment for men and women to learn life skills and regain their maximum cognitive functioning. We help each client build a foundation that will ensure lifestyle changes to reduce the chance of relapse dramatically.
          </p>
        </div>
      </div>
    </section>


 
   <StripRating/>

   

   
      </div>


      <Footer/>
      
      
      </>)
}

export default About